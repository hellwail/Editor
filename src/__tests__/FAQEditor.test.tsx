import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FAQEditor from '../FAQEditor'

describe('FAQEditor', () => {
  beforeEach(() => {
    // Очищаем localStorage перед каждым тестом
    localStorage.clear()
  })

  it('should create, edit and delete FAQ items', async () => {
    render(<FAQEditor />)
    const user = userEvent.setup()

    // Проверяем создание нового FAQ
    const addButton = screen.getByText('Add item')
    await user.click(addButton)

    // Проверяем наличие плейсхолдеров
    expect(screen.getByText('Введите вопрос...')).toBeInTheDocument()
    expect(screen.getByText('Введите ответ...')).toBeInTheDocument()

    // Вводим текст вопроса и ответа
    const questionInput = screen.getByRole('textbox', { name: /question/i })
    const answerInput = screen.getByRole('textbox', { name: /answer/i })

    await user.type(questionInput, 'Test Question')
    await user.type(answerInput, 'Test Answer')

    expect(questionInput).toHaveValue('Test Question')
    expect(answerInput).toHaveValue('Test Answer')

    // Проверяем удаление FAQ
    const deleteButton = screen.getByText('Delete')
    await user.click(deleteButton)

    expect(screen.queryByText('Test Question')).not.toBeInTheDocument()
    expect(screen.queryByText('Test Answer')).not.toBeInTheDocument()
  })
}) 