'use client';

import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const SatisfactionSurvey: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página).

    try {
      // Faz a requisição para o endpoint /api/sendSurvey.
      const response = await fetch('/api/sendSurvey', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, rating, comments }), // Envia os dados do formulário.
      });

      if (response.ok) {
        // Exibe uma mensagem de sucesso se o envio for bem-sucedido.
        alert('Obrigado pela sua resposta!');
        onClose(); // Fecha o modal.
      } else {
        // Lida com possíveis erros de resposta da API.
        const errorData = await response.json();
        console.error('Erro ao enviar:', errorData);
        alert('Houve um problema ao enviar sua resposta. Tente novamente.');
      }
    } catch (error) {
      // Captura erros que ocorrem durante a requisição (problemas de rede, etc.).
      console.error('Erro no envio:', error);
      alert('Não foi possível enviar a pesquisa. Verifique sua conexão.');
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Travar scroll quando o modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackgroundClick}
    >
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500 hover:text-red-600 transition"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold text-green-500 text-center">
          Pesquisa de Satisfação
        </h2>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Campo Nome */}
          <label className="block text-left">
            <span className="text-gray-700 font-semibold">Nome:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </label>

          {/* Campo E-mail */}
          <label className="block text-left">
            <span className="text-gray-700 font-semibold">E-mail:</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </label>

          {/* Avaliação */}
          <label className="block text-left">
            <span className="text-gray-700 font-semibold">Avaliação:</span>
            <div className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full">
              <select

                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="">Selecione...</option>
                <option value="1">1 - Muito Insatisfeito</option>
                <option value="2">2 - Insatisfeito</option>
                <option value="3">3 - Neutro</option>
                <option value="4">4 - Satisfeito</option>
                <option value="5">5 - Muito Satisfeito</option>
              </select>
            </div>
          </label>

          {/* Comentários */}
          <label className="block text-left">
            <span className="text-gray-700 font-semibold">Comentários:</span>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
            />
          </label>

          {/* Botão Enviar */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SatisfactionSurvey;
