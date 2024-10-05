import { useRouteError } from 'react-router-dom';
import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    // Check if error.data is already an object or string
    try {
      const errorData =
        typeof error.data === 'string' ? JSON.parse(error.data) : error.data;
      message = errorData.message;
    } catch (e) {
      message = 'An unknown error occurred.';
    }
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
