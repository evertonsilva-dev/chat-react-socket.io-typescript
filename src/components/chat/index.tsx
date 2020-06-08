import React, { ReactNodeArray, useEffect, useState } from 'react';
import socketio from 'socket.io-client';
import { Button } from 'src/styles/components';
import Input from '../Input';
import { TextArea } from '../Input/styles';
import { ChatContainer, Message, MessageContainer } from './styles';
const ENDPOINT = 'http://localhost:4001/';
const socket = socketio(ENDPOINT);
export default function Chat() {
  const [messages, setMessage] = useState<ReactNodeArray>([]);
  const renderMessage = (message: any) => {
    setMessage((oldValue) => [
      ...oldValue,
      <Message>
        <span className="name">{message.nome}</span>
        <span className="message">{message.mensagem}</span>
      </Message>,
    ]);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    let nome = e.target.nome.value;
    let mensagem = e.target.mensagem.value;
    if (nome.length && mensagem.length) {
      let msgObject = {
        nome,
        mensagem,
      };
      renderMessage(msgObject);
      socket.emit('sendMessage', msgObject);
    }
    e.target.reset();
  };
  useEffect(() => {
    socket.on('receivedMessage', (message: any) => {
      renderMessage(message);
    });
    socket.on('previousMessages', (messages: any) => {
      for (let message of messages) {
        renderMessage(message);
      }
    });
  }, []);
  return (
    <ChatContainer>
      <MessageContainer id="messageContainer">{messages}</MessageContainer>
      <form onSubmit={onSubmit}>
        <Input type="text" name="nome" placeholder="Nome" required />
        <TextArea placeholder="Mensagem" name="mensagem" required />
        <Button type="submit" className="larger">
          Enviar
        </Button>
      </form>
    </ChatContainer>
  );
}
