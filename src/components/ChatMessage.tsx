'use client';

import React from 'react';
import { Card } from '@/components/ui/card';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatMessage({ role, content, timestamp }: ChatMessageProps) {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatContent = (text: string) => {
    // Format text dengan line breaks dan styling sederhana
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  if (role === 'user') {
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-[80%]">
          <Card className="bg-primary text-primary-foreground p-4">
            <div className="text-sm leading-relaxed">
              {formatContent(content)}
            </div>
            <div className="text-xs opacity-70 mt-2 text-right">
              {formatTime(timestamp)}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[80%]">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            🌸
          </div>
          <div className="flex-1">
            <Card className="bg-muted p-4">
              <div className="text-sm leading-relaxed text-muted-foreground">
                {formatContent(content)}
              </div>
              <div className="text-xs opacity-70 mt-2">
                Aluana AI • {formatTime(timestamp)}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WelcomeMessage() {
  return (
    <div className="text-center py-12">
      <div className="text-6xl mb-6 animate-bounce">🌸</div>
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Selamat datang di Aluana AI
      </h2>
      <p className="text-muted-foreground text-lg mb-6 max-w-md mx-auto">
        Saya di sini untuk mendengarkan dan membantu Anda mengatasi berbagai tantangan mental dan emosional.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto text-sm">
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl mb-2">💭</div>
          <p className="font-medium mb-1">Ceritakan Perasaan</p>
          <p className="text-muted-foreground text-xs">Bagikan apa yang sedang Anda rasakan</p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="text-2xl mb-2">🎯</div>
          <p className="font-medium mb-1">Dapatkan Saran</p>
          <p className="text-muted-foreground text-xs">Terima strategi coping yang praktis</p>
        </div>
      </div>
    </div>
  );
}
