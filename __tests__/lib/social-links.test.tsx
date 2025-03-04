import React from 'react';
import { render } from '@testing-library/react';
import { socialLinks, socialButtonClass } from '../../lib/social-links';

describe('Social Links', () => {
  it('should have the correct number of social links', () => {
    expect(socialLinks.length).toBe(3);
  });

  it('should have GitHub, LinkedIn, and Twitter links', () => {
    const linkTypes = socialLinks.map(link => link.label);
    expect(linkTypes).toContain('GitHub');
    expect(linkTypes).toContain('LinkedIn');
    expect(linkTypes).toContain('Twitter');
  });

  it('should have valid URLs for each social link', () => {
    socialLinks.forEach(link => {
      expect(link.href).toMatch(/^https:\/\//);
    });
  });

  it('should have icon components for each social link', () => {
    socialLinks.forEach(link => {
      expect(React.isValidElement(link.icon)).toBe(true);
    });
  });

  it('should have the correct socialButtonClass', () => {
    // クラス名が文字列であることを確認
    expect(typeof socialButtonClass).toBe('string');
    
    // クラス名に特定のスタイルが含まれていることを確認
    expect(socialButtonClass).toContain('text-gray-600');
    expect(socialButtonClass).toContain('hover:text-gray-900');
    expect(socialButtonClass).toContain('dark:text-gray-400');
  });
});