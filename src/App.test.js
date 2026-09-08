import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('Portfolio', () => {
  test('hiển thị hero với tên và giới thiệu fullstack developer', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: /Xuân Lộc/i })).toBeInTheDocument();
    expect(screen.getByText(/fullstack developer/i)).toBeInTheDocument();
  });

  test('hiển thị section Skills với các công nghệ', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument();
    const skillsSection = document.querySelector('#skills');
    expect(within(skillsSection).getByText('MongoDB')).toBeInTheDocument();
    expect(within(skillsSection).getByText('ReactJS')).toBeInTheDocument();
  });

  test('hiển thị section Projects với 3 dự án nổi bật', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByText('Parking Building Management System')).toBeInTheDocument();
    expect(screen.getByText('AI Incident Management Platform')).toBeInTheDocument();
    expect(screen.getByText('Football Community Platform')).toBeInTheDocument();
  });

  test('hiển thị section Contact với tên, số điện thoại và GitHub', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument();
    const contactSection = document.querySelector('#contact');
    expect(within(contactSection).getByText(/Phạm Xuân Lộc/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /0383 436 414/ })).toHaveAttribute('href', 'tel:0383436414');
    expect(within(contactSection).getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/locphamxuan'
    );
  });

  test('không còn Newsletter/Mailchimp', () => {
    render(<App />);
    expect(screen.queryByText(/newsletter/i)).toBeNull();
  });

  test('hiển thị footer với copyright', () => {
    render(<App />);
    expect(screen.getByText(/© 2026 Phạm Xuân Lộc/)).toBeInTheDocument();
  });
});
