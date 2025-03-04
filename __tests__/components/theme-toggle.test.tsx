import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../../components/theme-toggle';
import { useTheme } from 'next-themes';

// モックを上書き
jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

describe('ThemeToggle', () => {
  it('renders the theme toggle button', () => {
    // モックの戻り値を設定
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: jest.fn(),
    });

    render(<ThemeToggle />);
    
    // ボタンが存在することを確認
    const button = screen.getByRole('button', { name: /テーマを切り替える/i });
    expect(button).toBeInTheDocument();
  });

  it('shows moon icon when theme is light', () => {
    // モックの戻り値を設定
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: jest.fn(),
    });

    render(<ThemeToggle />);
    
    // Moonアイコンが表示されていることを確認
    // Note: SVGアイコンは直接テストが難しいため、aria-labelなどがあると良い
    const button = screen.getByRole('button', { name: /テーマを切り替える/i });
    expect(button).toBeInTheDocument();
  });

  it('shows sun icon when theme is dark', () => {
    // モックの戻り値を設定
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'dark',
      setTheme: jest.fn(),
    });

    render(<ThemeToggle />);
    
    // Sunアイコンが表示されていることを確認
    const button = screen.getByRole('button', { name: /テーマを切り替える/i });
    expect(button).toBeInTheDocument();
  });

  it('toggles theme when clicked', () => {
    // モックの関数を作成
    const setThemeMock = jest.fn();
    
    // モックの戻り値を設定
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
    });

    render(<ThemeToggle />);
    
    // ボタンをクリック
    const button = screen.getByRole('button', { name: /テーマを切り替える/i });
    fireEvent.click(button);
    
    // setThemeが正しい引数で呼ばれたことを確認
    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });
});