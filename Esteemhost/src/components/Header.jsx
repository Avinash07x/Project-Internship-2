import React from 'react'

const Header = () => {
  return (
    <div>
              {/* Main Header */}
      <header className="bg-white sticky top-0 z-[9999] transition-all duration-300 pl-3 pr-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center py-2 gap-4">
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <button
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex-shrink-0">
                <div className="flex items-center w-[180px] pt-1 relative right-[8px]">
                  <Link to={"/"}><img src={DCKNav} alt="Logo" /></Link>
                </div>
              </div>
            </div>
            {/* Domain Search in Header */}
            <div className="flex-1 max-w-2xl w-full lg:mx-6">
              <div className="flex bg-gray-50 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <input
                  type="text"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  placeholder="Enter a Domain Name"
                  className="flex-1 px-4 py-2 text-sm bg-transparent outline-none"
                />
                <select
                  value={selectedExtension}
                  onChange={(e) => setSelectedExtension(e.target.value)}
                  className="px-3 py-2 bg-white border-l border-gray-200 outline-none text-sm hover:bg-gray-50 transition-colors"
                >
                  {domainExtensions.map(ext => (
                    <option key={ext} value={ext}>{ext}</option>
                  ))}
                </select>
                <button
                  onClick={handleDomainSearch}
                  className="px-6 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Modified Dropdown Hover Alignment and Sticky Header Confirmed */}
            <nav className="hidden lg:flex">
              <ul className="flex gap-6">
                {navItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <a
                      href="#"
                      className="text-slate-700 font-medium py-2 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                      {item.name}
                    </a>

                    <div
                      className={`absolute top-full right-0 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 rounded-lg border transform translate-y-2 group-hover:translate-y-0 z-40
                      ${item.sections.length <= 1 && item.sections[0].links.length <= 2 ? 'min-w-[220px]' : 'min-w-[700px]'}`}
                    >
                      <div
                        className={`grid gap-6 ${item.sections.length <= 1 ? 'grid-cols-1' : 'grid-cols-3'
                          }`}
                      >
                        {item.sections.map((section, sectionIndex) => (
                          <div
                            key={sectionIndex}
                            className="transform transition-all duration-300 hover:scale-105"
                          >
                            <h4 className="text-slate-800 font-semibold text-sm mb-3 pb-2 border-b-2 border-blue-500">
                              {section.title}
                            </h4>
                            <ul className="space-y-2">
                              {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a
                                    href={link.href}
                                    className="text-gray-600 text-sm hover:text-blue-600 transition-all duration-300 hover:translate-x-1 block"
                                  >
                                    {link.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}

              </ul>
            </nav>


          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item, index) => (
                <div key={index} className="border-b pb-2 transform transition-all duration-300 hover:translate-x-2">
                  <div className="font-medium text-slate-700 py-2">{item.name}</div>
                  <div className="grid gap-4 pl-4">
                    {item.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <div className="font-medium text-sm text-slate-600 mb-1">{section.title}</div>
                        <div className="space-y-1 pl-2">
                          {section.links.map((link, linkIndex) => (
                            <a key={linkIndex} href={link.href} className="block text-sm text-gray-500 hover:text-blue-600 transition-all duration-300 hover:translate-x-1">
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default Header
