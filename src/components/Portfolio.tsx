import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'solar', name: 'Solar Farms' },
    { id: 'hydro', name: 'Hydro Seeding' }
  ];

  const projects = [
    {
      id: 1,
      category: 'commercial',
      title: 'Industrial Complex Maintenance',
      description: 'Large-scale grounds maintenance for 500-acre industrial facility',
      image: '/Generated Image August 28, 2025 - 10_09PM (1).jpeg',
      details: '500 acres • Monthly maintenance • Custom equipment'
    },
    {
      id: 2,
      category: 'solar',
      title: 'Solar Farm Vegetation Control',
      description: 'Comprehensive vegetation management for 1,200-acre solar installation',
      image: '/Generated Image August 28, 2025 - 10_09PM (2).jpeg',
      details: '1,200 acres • Pollinator-friendly • Quarterly service'
    },
    {
      id: 3,
      category: 'hydro',
      title: 'Erosion Control Project',
      description: 'Hydro seeding and stabilization for highway construction site',
      image: '/Generated Image August 28, 2025 - 10_09PM (3).jpeg',
      details: '50 acres • Erosion control • 6-month establishment'
    },
    {
      id: 4,
      category: 'commercial',
      title: 'Logistics Center Grounds',
      description: 'Complete grounds management for major distribution center',
      image: '/Generated Image August 28, 2025 - 10_09PM (4).jpeg',
      details: '300 acres • Year-round service • Safety compliance'
    },
    {
      id: 5,
      category: 'solar',
      title: 'Utility-Scale Solar Maintenance',
      description: 'Ongoing maintenance for multiple solar installations',
      image: '/Generated Image August 28, 2025 - 10_10PM.jpeg',
      details: '2,000+ acres • Multi-site • Environmental compliance'
    },
    {
      id: 6,
      category: 'hydro',
      title: 'Land Reclamation Project',
      description: 'Complete site restoration and hydro seeding for former industrial site',
      image: '/Generated Image August 28, 2025 - 10_09PM.jpeg',
      details: '150 acres • Full restoration • Native species'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B40] mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We've helped maintain and mow over 4,000 acres of active solar farms across eleven states, serving 15+ major solar energy companies. With more than 20 years of heavy-duty commercial land maintenance experience—and as one of the first to specialize in large-scale solar farm mowing—our equipment and expertise can handle jobs of any size, from 100 to over 1,000 acres in a single project.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-[#F07520] text-white shadow-lg'
                  : 'bg-gray-100 text-[#1D2B40] hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D2B40]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <button className="bg-[#F07520] text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 hover:bg-[#E06610] transition-colors duration-200">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1D2B40] mb-2 group-hover:text-[#F07520] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-medium">{project.details}</span>
                  <div className={`w-3 h-3 rounded-full ${
                    project.category === 'commercial' ? 'bg-blue-500' :
                    project.category === 'solar' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 bg-[#1D2B40] rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#F07520] mb-2">500+</div>
              <div className="text-[#EAEAEA] font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F07520] mb-2">4,000+</div>
              <div className="text-[#EAEAEA] font-medium">Acres Maintained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F07520] mb-2">11</div>
              <div className="text-[#EAEAEA] font-medium">States Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#F07520] mb-2">20+</div>
              <div className="text-[#EAEAEA] font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;