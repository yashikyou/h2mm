import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const getErrorMsg = (err: unknown) => {
  if (isRouteErrorResponse(err)) {
    return `${err.status} - ${err.statusText}`;
  }

  if (err instanceof Error) {
    return err.message;
  }

  if (typeof err === 'string') {
    return err;
  }
  return 'Unknown error';
}

const ErrorPage = () =>
  <div>
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{getErrorMsg(useRouteError())}</i>
    </p>
  </div>;

export default ErrorPage;
