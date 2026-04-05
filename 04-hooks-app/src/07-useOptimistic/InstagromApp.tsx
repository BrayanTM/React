import { useOptimistic, useState, useTransition } from "react";

interface Comment {
  id: number;
  text: string;
  optimistic?: boolean;
}

let lastId = 2;

export const InstagromApp = () => {
  const [isPending, startTransition] = useTransition();

  const [comments, setComments] = useState<Comment[]>([
    { id: 1, text: "¡Gran foto!" },
    { id: 2, text: "Me encanta 🧡" },
  ]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, newCommentText: string) => {
      return [
        ...currentComments,
        {
          id: lastId++,
          text: newCommentText,
          optimistic: true,
        },
      ];
    },
  );

  const handleAddComment = async (formData: FormData) => {
    const messageText = formData.get("post-message") as string;
    addOptimisticComment(messageText);

    startTransition(async () => {
      // Simula la respuesta del servidor
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Servidor Respondio");

      setComments((prev) => [
        ...prev,
        {
          id: lastId++,
          text: messageText,
        },
      ]);
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-700">
      {/* Post de ejemplo */}
      <div className="flex w-125 flex-col items-center justify-center rounded-t-3xl bg-gray-300 p-4">
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop"
          alt="Instagrom"
          className="mb-4 rounded-xl object-cover"
        />
        <p className="mb-4 font-bold text-black">
          Mira que interesante esta funcionalidad de la API de React.
        </p>
      </div>

      {/* Comentarios */}
      <ul className="flex w-125 flex-col items-start justify-center bg-gray-300 p-4">
        {optimisticComments.map((comment) => (
          <li key={comment.id} className="mb-2 flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
              <span className="text-center text-white">A</span>
            </div>
            <p className="text-black">{comment.text}</p>
            {comment.optimistic && (
              <span className="text-sm text-gray-500">enviando... </span>
            )}
          </li>
        ))}
      </ul>

      {/* Formulario de comentarios */}
      <form
        action={handleAddComment}
        className="flex w-125 flex-col items-center justify-center rounded-b-3xl bg-gray-300 p-4"
      >
        <input
          type="text"
          name="post-message"
          placeholder="Escribe un comentario"
          required
          className="mb-2 w-full rounded-md bg-white p-2 text-black"
        />
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-md bg-blue-500 p-2 text-white"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
