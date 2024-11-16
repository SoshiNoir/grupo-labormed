'use client';

import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const SatisfactionSurvey: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Enviar os dados da pesquisa
    const response = await fetch('/api/sendSurvey', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, rating, comments }),
    });

    if (response.ok) {
      alert('Obrigado pela sua resposta!');
      onClose(); // Fechar o modal após o envio
    } else {
      alert('Houve um problema ao enviar sua resposta. Tente novamente.');
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Verifica se o clique foi na camada de fundo e não no modal
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Selecione...</option>
              <option value="1">1 - Muito Insatisfeito</option>
              <option value="2">2 - Insatisfeito</option>
              <option value="3">3 - Neutro</option>
              <option value="4">4 - Satisfeito</option>
              <option value="5">5 - Muito Satisfeito</option>
            </select>
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
