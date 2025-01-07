import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, rating, comments } = await request.json();

    // Aqui você pode processar os dados, como enviar um e-mail ou salvar em um banco de dados.
    console.log('Dados recebidos:', { name, email, rating, comments });

    // Exemplo de resposta de sucesso
    return NextResponse.json({ message: 'Resposta recebida com sucesso!' });
  } catch (error) {
    console.error('Erro ao processar a requisição:', error);
    return NextResponse.json({ message: 'Erro ao processar sua resposta.' }, { status: 500 });
  }
}
