function NotFound() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800 leading-normal">
      {" "}
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
          <p className="text-xl font-semibold mb-4">Not Found</p>
          <p className="text-gray-600">
            La page que vous recherchez semble introuvable.
          </p>
          <a href="/accueil" className="text-blue-500 hover:underline">
            Retour à la page d'accueil
          </a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
