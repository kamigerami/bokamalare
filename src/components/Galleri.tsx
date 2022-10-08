const files = [
    {
      title: 'STHLM VIT',
      info: 'Södermalm',
      source:
        'https://images.unsplash.com/photo-1621685682093-3b8016dcb57d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    },
    {
        title: 'FÄRG SKALA',
        info: 'Kundval',
        source:
          '    https://images.unsplash.com/photo-1608231261603-42c08866e163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80',
      },
      {
        title: 'SCENARBETE',
        info: 'Målning av teater scen',
        source:
          'https://images.unsplash.com/photo-1595640115473-714d7e80cb48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      },
      {
        title: 'FASAD',
        info: 'Sommaren 2021',
        source:
          'https://images.unsplash.com/photo-1597758011027-6134de0be2e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      },
      {
        title: 'LÄGENHET',
        info: 'Väggar & Snickerier',
        source:
          'https://images.unsplash.com/photo-1582224163312-0735047647c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      },

      {
        title: 'NYRENOVERING',
        info: 'Dörrar & Fönster',
        source:
          'https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=80',
      },
      {
        title: 'NYINREDNING',
        info: 'Efter inflytt',
        source:
          'https://images.unsplash.com/photo-1631701601945-414a32dbef47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80',
      },
      {
        title: 'VINTAGE',
        info: 'Pensel',
        source:
          'https://images.unsplash.com/photo-1644375392039-bcd68b2fa79b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      },

      
    // More files...
  ]
  
  export default function Galleri() {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        {files.map((file) => (
          <li key={file.source} className="relative">
            <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
              <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />
              <button type="button" className="absolute inset-0 focus:outline-none">
                <span className="sr-only">View details for {file.title}</span>
              </button>
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.info}</p>
          </li>
        ))}
      </ul>
      </div>
    )
  }
  