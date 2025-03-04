import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../../components/hero';

// framer-motionのモック
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Hero', () => {
  it('renders the hero section with title', () => {
    render(<Hero />);
    
    // タイトルが表示されていることを確認
    const titleElement = screen.getByText(/こんにちは/i);
    expect(titleElement).toBeInTheDocument();
    
    const nameElement = screen.getByText(/開発者名/i);
    expect(nameElement).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Hero />);
    
    // 説明文が表示されていることを確認
    const descriptionElement = screen.getByText(/フルスタック開発者として/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<Hero />);
    
    // スキルを見るボタンが表示されていることを確認
    const skillsButton = screen.getByRole('link', { name: /スキルを見る/i });
    expect(skillsButton).toBeInTheDocument();
    expect(skillsButton).toHaveAttribute('href', '#skills');
    
    // お問い合わせボタンが表示されていることを確認
    const contactButton = screen.getByRole('link', { name: /お問い合わせ/i });
    expect(contactButton).toBeInTheDocument();
    expect(contactButton).toHaveAttribute('href', '#contact');
  });

  it('renders social media links', () => {
    render(<Hero />);
    
    // ソーシャルメディアリンクが表示されていることを確認
    const socialLinks = screen.getAllByRole('link', { name: /(GitHub|LinkedIn|Twitter)/i });
    expect(socialLinks.length).toBe(3);
    
    // 各リンクが正しいURLを持っていることを確認
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toHaveAttribute('href', expect.stringContaining('github.com'));
    
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    
    const twitterLink = screen.getByRole('link', { name: /Twitter/i });
    expect(twitterLink).toHaveAttribute('href', expect.stringContaining('twitter.com'));
  });
});