const Message = ({ message }) => {
  return (
    <>
      <div>
        <a
          className="group block bg-gray-100 hover:bg-gray-200 p-4 rounded-md text-center transition-all duration-300 dark:bg-white/[.05] dark:hover:bg-white/[.075]"
          href="#"
        >
          <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
            <p className="mr-2 inline-block text-sm text-gray-800 dark:text-gray-200">
              {message}
            </p>
            <span className="group-hover:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-blue-600 text-sm dark:text-blue-500">
              Compra ahora
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </>
  )
}

export default Message
