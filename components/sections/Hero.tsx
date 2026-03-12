import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-1">
      {/* Hero Box 1 - PLACEHOLDER */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-4 lg:w-20 bg-primary flex-shrink-0" />

        {/* Content */}
        <div className="flex-1 bg-white border border-primary p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4 font-lora">
            {/* PLACEHOLDER: Hero Box 1 Title */}
            Section Title Goes Here
          </h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <p className="text-gray-700 mb-4 font-lora">
                {/* PLACEHOLDER: Hero Box 1 Content */}
                Content goes here. This is a placeholder for your first hero section.
                Add your narrative text, descriptions, or featured content in this area.
                The layout supports images, text, and call-to-action buttons.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#"
                  className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors text-sm font-bold"
                >
                  Button 1
                </Link>
                <Link
                  href="#"
                  className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors text-sm font-bold"
                >
                  Button 2
                </Link>
              </div>
            </div>
            {/* Placeholder Image */}
            <div className="w-full lg:w-64 h-48 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-4 lg:w-20 bg-sky-200 flex-shrink-0" />
      </div>

      {/* Hero Box 2 - PLACEHOLDER */}
      <div className="flex mt-1">
        {/* Left Sidebar (alternating color) */}
        <div className="w-4 lg:w-20 bg-sky-200 flex-shrink-0" />

        {/* Content */}
        <div className="flex-1 bg-white border border-primary p-6 lg:p-8">
          <Link href="#" className="hover:opacity-80">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4 font-lora">
              {/* PLACEHOLDER: Hero Box 2 Title */}
              Featured Program Title
            </h2>
          </Link>
          <p className="text-gray-700 mb-4 font-lora">
            {/* PLACEHOLDER: Hero Box 2 Content */}
            This section can feature lectures, events, or special programs.
            Add speaker photos, event details, and call-to-action buttons.
          </p>
          {/* Placeholder for speaker photos */}
          <div className="flex flex-wrap justify-center gap-6 my-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Photo 1</span>
              </div>
              <p className="text-sm font-bold">Speaker Name</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Photo 2</span>
              </div>
              <p className="text-sm font-bold">Speaker Name</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#"
              className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors text-sm font-bold"
            >
              Learn More
            </Link>
            <Link
              href="#"
              className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors text-sm font-bold"
            >
              View Materials
            </Link>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-4 lg:w-20 bg-primary flex-shrink-0" />
      </div>

      {/* Hero Box 3 - PLACEHOLDER */}
      <div className="flex mt-1">
        {/* Left Sidebar */}
        <div className="w-4 lg:w-20 bg-primary flex-shrink-0" />

        {/* Content */}
        <div className="flex-1 bg-white border border-primary p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4 font-lora">
            {/* PLACEHOLDER: Hero Box 3 Title */}
            Archive Section Title
          </h2>
          <p className="text-gray-700 mb-4 font-lora">
            {/* PLACEHOLDER: Hero Box 3 Content */}
            Placeholder for archive content, historical documents, or research resources.
            Add descriptions, links to resources, and navigation buttons.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors text-sm font-bold"
            >
              Browse Archive
            </Link>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-4 lg:w-20 bg-sky-200 flex-shrink-0" />
      </div>

      {/* Hero Box 4 - PLACEHOLDER */}
      <div className="flex mt-1">
        {/* Left Sidebar (alternating color) */}
        <div className="w-4 lg:w-20 bg-sky-200 flex-shrink-0" />

        {/* Content */}
        <div className="flex-1 bg-white border border-primary p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-4 font-lora">
            {/* PLACEHOLDER: Hero Box 4 Title */}
            Additional Content Section
          </h2>
          <p className="text-gray-700 mb-4 font-lora">
            {/* PLACEHOLDER: Hero Box 4 Content */}
            This section can hold additional featured content, publications,
            historical documents, or any other important information.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#"
              className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors text-sm font-bold"
            >
              Read More
            </Link>
            <Link
              href="#"
              className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors text-sm font-bold"
            >
              Download PDF
            </Link>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-4 lg:w-20 bg-primary flex-shrink-0" />
      </div>
    </section>
  )
}
