import Category from './Category'

const CategoryList = () => {
  return (
    <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
      <button
        type="button"
        className="flex items-center w-full text-white/[.8] hover:text-white font-medium"
      >
        Categorias
        <svg
          className="ml-2 w-2.5 h-2.5"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>
      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
        <Category name="Pequeños" />
        <Category name="Climatización" />
        <Category name="Refrigeración" />
        <Category name="Lavado" />
        <Category name="TV y Audio" />
      </div>
    </div>
  )
}

export default CategoryList
