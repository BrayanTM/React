import { useReducer, useState } from "react";

import { Plus, Trash2, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getTaskInitialState, taskReducer } from "./reducer/taskReducer";

export const TasksApp = () => {
  const [inputValue, setInputValue] = useState("");
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [state, dispatch] = useReducer(taskReducer, getTaskInitialState());

  const addTodo = () => {
    if (inputValue.length === 0) return;

    dispatch({ type: "ADD_TODO", payload: inputValue });
    setInputValue("");
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const { todos, completed: completedCount, length: totalCount } = state;

  // const completedCount = todos.filter((todo) => todo.completed).length;
  // const totalCount = todos.length;

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-slate-800">
            Lista de Tareas
          </h1>
          <p className="text-slate-600">
            Mantén tus tareas organizadas y consigue hacerlas
          </p>
        </div>

        <Card className="mb-6 border-0 bg-white/80 shadow-lg backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex gap-2">
              <Input
                placeholder="Añade una nueva tarea..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 border-slate-200 focus:border-slate-400 focus:ring-slate-400"
              />
              <Button
                onClick={addTodo}
                className="bg-slate-800 px-4 text-white hover:bg-slate-700"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {totalCount > 0 && (
          <Card className="mb-6 border-0 bg-white/80 shadow-lg backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-slate-700">
                Progreso
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>
                  {completedCount} de {totalCount} completadas
                </span>
                <span>{Math.round((completedCount / totalCount) * 100)}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200">
                <div
                  className="h-2 rounded-full bg-linear-to-r from-green-400 to-green-500 transition-all duration-300 ease-out"
                  style={{ width: `${(completedCount / totalCount) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-0 bg-white/80 shadow-lg backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-700">
              Tareas
            </CardTitle>
          </CardHeader>
          <CardContent>
            {todos.length === 0 ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                  <Check className="h-8 w-8 text-slate-400" />
                </div>
                <p className="mb-2 text-lg text-slate-500">No hay tareas</p>
                <p className="text-sm text-slate-400">
                  Añade una tarea arriba para empezar
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`flex items-center gap-3 rounded-lg border p-3 transition-all duration-200 ${
                      todo.completed
                        ? "border-slate-200 bg-slate-50"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                      className="data-[state=checked]:border-green-500 data-[state=checked]:bg-green-500"
                    />
                    <span
                      className={`flex-1 transition-all duration-200 ${
                        todo.completed
                          ? "text-slate-500 line-through"
                          : "text-slate-800"
                      }`}
                    >
                      {todo.text}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteTodo(todo.id)}
                      className="h-8 w-8 p-0 text-slate-400 hover:bg-red-50 hover:text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
