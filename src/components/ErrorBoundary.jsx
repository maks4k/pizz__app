
import  { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const onError = (error, errorInfo) => {
    console.error('Error captured in ErrorBoundary:', error, errorInfo);
    setHasError(true);
  };

  // Обработчик ошибок
  useEffect(() => {
    const handleError = (error) => {
      onError(error);
    };

    // Привязка обработчика ошибок
    window.addEventListener('error', handleError);
    return () => {
      // Удаление обработчика при размонтировании компонента
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    // Запасной UI
    return <h1>Что-то пошло не так....</h1>;
  }

  return children; 
};

export default ErrorBoundary;