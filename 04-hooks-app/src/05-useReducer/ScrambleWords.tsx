// ! Importante:
// Es necesario componentes de Shadcn/ui
// https://ui.shadcn.com/docs/installation/vite

import React, { useEffect, useReducer } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { SkipForward, Play } from "lucide-react";
import confetti from "canvas-confetti";
import {
  getInitialState,
  scrambleWordsReducer,
} from "./reducer/scrambleWordsReducer";

export const ScrambleWords = () => {
  const [state, dispatch] = useReducer(scrambleWordsReducer, getInitialState());

  const {
    currentWord,
    errorCounter,
    guess,
    isGameOver,
    maxAllowErrors,
    maxSkips,
    points,
    scrambledWord,
    skipCounter,
    totalWords,
    words,
  } = state;

  useEffect(() => {
    if (points === 0) return;
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.6 },
    });
  }, [points]);

  const handleGuessSubmit = (e: React.FormEvent) => {
    // Previene el refresh de la página
    e.preventDefault();

    dispatch({
      type: "CHECK_ANSWER",
    });
  };

  const handleSkip = () => {
    dispatch({
      type: "SKIP_WORD",
    });
  };

  const handlePlayAgain = () => {
    dispatch({
      type: "START_NEW_GAME",
      payload: getInitialState(),
    });
  };

  //! Si ya no hay palabras para jugar, se muestra el mensaje de fin de juego
  if (words.length === 0) {
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.6 },
    });
    return (
      <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-purple-100 via-blue-50 to-indigo-100 p-4">
        <div className="mx-auto w-full max-w-md">
          <h1 className="mb-2 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
            Palabras desordenadas
          </h1>
          <p className="text-gray-600">No hay palabras para jugar</p>
          <br />
          <div>Puntaje: {points}</div>
          <br />
          <div>Errores: {errorCounter}</div>
          <br />
          <div>Saltos: {skipCounter}</div>
          <br />
          <Button onClick={handlePlayAgain}>Jugar de nuevo</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-purple-100 via-blue-50 to-indigo-100 p-4">
      <div className="mx-auto w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
            Palabras desordenadas
          </h1>
          <p className="text-gray-600">
            Desordena las letras para encontrar la palabra!
          </p>
        </div>

        {/* Main Game Card */}
        <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm">
          <CardContent className="p-8">
            {/* Scrambled Word Display */}
            <div className="mb-8">
              <h2 className="mb-4 flex items-center justify-center gap-2 text-center text-sm font-medium tracking-wide text-gray-500 uppercase">
                Palabra Desordenada
                {isGameOver && (
                  <span className="text-xl text-red-500"> {currentWord}</span>
                )}
              </h2>

              <div className="mb-6 flex justify-center gap-2">
                {scrambledWord.split("").map((letter, index) => (
                  <div
                    key={index}
                    className="flex h-12 w-12 transform items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 text-xl font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>

            {/* Guess Input */}
            <form onSubmit={handleGuessSubmit} className="mb-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="guess"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Adivina la palabra
                  </label>
                  <Input
                    id="guess"
                    type="text"
                    value={guess}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_GUESS",
                        payload: e.target.value,
                      })
                    }
                    placeholder="Ingresa tu palabra..."
                    className="h-12 border-2 border-indigo-200 text-center text-lg font-semibold transition-colors focus:border-indigo-500"
                    maxLength={scrambledWord.length}
                    disabled={isGameOver}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full transform rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:from-indigo-600 hover:to-purple-700 hover:shadow-xl"
                  disabled={!guess.trim() || isGameOver}
                >
                  Enviar Adivinanza
                </Button>
              </div>
            </form>

            {/* Stats */}
            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-green-200 bg-linear-to-br from-green-50 to-emerald-50 p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {points} / {totalWords}
                </div>
                <div className="text-sm font-medium text-green-700">Puntos</div>
              </div>
              <div className="rounded-lg border border-red-200 bg-linear-to-br from-red-50 to-rose-50 p-4 text-center">
                <div className="text-2xl font-bold text-red-600">
                  {errorCounter}/{maxAllowErrors}
                </div>
                <div className="text-sm font-medium text-red-700">Errores</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleSkip}
                variant="outline"
                className="flex items-center justify-center gap-2 border-2 border-gray-300 transition-colors hover:border-gray-400 hover:bg-gray-50"
                disabled={isGameOver || skipCounter >= maxSkips}
              >
                <SkipForward className="h-4 w-4" />
                Saltar ({skipCounter} / {maxSkips})
              </Button>
              <Button
                onClick={handlePlayAgain}
                variant="outline"
                className="flex items-center justify-center gap-2 border-2 border-indigo-300 text-indigo-600 transition-colors hover:border-indigo-400 hover:bg-indigo-50"
              >
                <Play className="h-4 w-4" />
                Jugar de nuevo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Desafíate con palabras desordenadas!
            <br />
            <br />
            {words.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};
