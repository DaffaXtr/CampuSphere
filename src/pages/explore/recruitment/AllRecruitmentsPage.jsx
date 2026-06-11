import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecruitmentCard from '../../../components/explore/RecruitmentCard';
import Breadcrumb from '../../../components/common/Breadcrumb';

const AllRecruitmentsPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeDepartment, setActiveDepartment] = useState('All Positions');
  const [activeRoleType, setActiveRoleType] = useState('All Types');
  const [activeStatus, setActiveStatus] = useState('Any Status');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const allRecruitments = [
    {
      id: 1,
      title: 'Google Developer Student Club',
      subtitle: 'Core Team Member',
      imageSrc: 'https://www.risetechnical.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2haTHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e8857707636a509dc4e3a4117252ed2b8e3a032d/Why%20Use%20a%20Recruitment%20Agency.webp',
      icon: 'groups',
      iconColor: 'text-primary',
      tags: ['Engineering', 'Full-time'],
      timeRemaining: 'Closing in 2d',
      department: 'Engineering',
      roleType: 'Full-time',
      status: 'Open'
    },
    {
      id: 2,
      title: 'Student Executive Board',
      subtitle: 'Head of Public Relations',
      imageSrc: 'https://www.risetechnical.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2haTHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e8857707636a509dc4e3a4117252ed2b8e3a032d/Why%20Use%20a%20Recruitment%20Agency.webp',
      icon: 'record_voice_over',
      iconColor: 'text-tertiary',
      tags: ['Marketing', 'Part-time'],
      timeRemaining: 'Closing in 5d',
      department: 'Marketing',
      roleType: 'Part-time',
      status: 'Closing Soon'
    },
    {
      id: 3,
      title: 'Campus Radio Station',
      subtitle: 'Podcast Host / Announcer',
      imageSrc: 'https://www.risetechnical.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2haTHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e8857707636a509dc4e3a4117252ed2b8e3a032d/Why%20Use%20a%20Recruitment%20Agency.webp',
      icon: 'mic',
      iconColor: 'text-warning',
      tags: ['Media', 'Contract'],
      timeRemaining: 'Closing in 1w',
      department: 'Media',
      roleType: 'Contract',
      status: 'Urgent'
    },
    {
      id: 4,
      title: 'UX Society',
      subtitle: 'UI/UX Design Intern',
      imageSrc: 'https://www.risetechnical.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2haTHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e8857707636a509dc4e3a4117252ed2b8e3a032d/Why%20Use%20a%20Recruitment%20Agency.webp',
      icon: 'palette',
      iconColor: 'text-secondary',
      tags: ['Design', 'Internship'],
      timeRemaining: 'Closing in 3w',
      department: 'Design',
      roleType: 'Internship',
      status: 'Open'
    },
    {
      id: 5,
      title: 'Investment Club',
      subtitle: 'Financial Analyst',
      imageSrc: 'https://www.risetechnical.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2haTHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e8857707636a509dc4e3a4117252ed2b8e3a032d/Why%20Use%20a%20Recruitment%20Agency.webp',
      icon: 'trending_up',
      iconColor: 'text-success',
      tags: ['Finance', 'Full-time'],
      timeRemaining: 'Closing in 1m',
      department: 'Finance',
      roleType: 'Full-time',
      status: 'Open'
    },
    {
      id: 6,
      title: 'Robotics Club',
      subtitle: 'Software Engineer',
      imageSrc: 'https://www.risetechnical.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBN2haTHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e8857707636a509dc4e3a4117252ed2b8e3a032d/Why%20Use%20a%20Recruitment%20Agency.webp',
      icon: 'smart_toy',
      iconColor: 'text-primary',
      tags: ['Engineering', 'Part-time'],
      timeRemaining: 'Closing in 2d',
      department: 'Engineering',
      roleType: 'Part-time',
      status: 'Closing Soon'
    }
  ];

  const departments = ['All Positions', 'Engineering', 'Design', 'Marketing', 'Media', 'Finance'];
  const roleTypes = ['All Types', 'Full-time', 'Part-time', 'Internship', 'Contract'];
  const statuses = ['Any Status', 'Open', 'Urgent', 'Closing Soon'];

  const filteredRecruitments = allRecruitments.filter(item => {
    if (activeDepartment !== 'All Positions' && item.department !== activeDepartment) return false;
    if (activeRoleType !== 'All Types' && item.roleType !== activeRoleType) return false;
    if (activeStatus !== 'Any Status' && item.status !== activeStatus) return false;
    return true;
  });

  return (
    <div className="py-lg md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      <header className="mb-xl md:mb-2xl">
        <Breadcrumb items={[
          { label: 'Explore', path: '/explore' },
          { label: 'All Positions' }
        ]} />
        <div className="mt-md">
          <h1 className="font-headline-xl text-headline-xl text-text-primary tracking-tight mb-2">Open Positions</h1>
          <p className="font-body-md text-body-md text-text-secondary max-w-2xl">Browse and apply for the latest recruitment opportunities from top student organizations.</p>
        </div>
      </header>

      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-lg lg:gap-xl`}>
        
        {/* Mobile: Simplified Filters Top Bar */}
        {isMobile && (
          <div className="flex flex-wrap gap-sm md:gap-lg items-end bg-surface border border-border p-sm md:p-md rounded-xl">
            <div className="flex flex-col gap-1 w-full sm:w-auto flex-1 min-w-[140px]">
              <label className="font-label-sm text-text-secondary">Departments</label>
              <div className="relative">
                <select 
                  value={activeDepartment} 
                  onChange={(e) => setActiveDepartment(e.target.value)}
                  className="w-full appearance-none bg-white border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full sm:w-auto flex-1 min-w-[140px]">
              <label className="font-label-sm text-text-secondary">Role Type</label>
              <div className="relative">
                <select 
                  value={activeRoleType} 
                  onChange={(e) => setActiveRoleType(e.target.value)}
                  className="w-full appearance-none bg-white border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  {roleTypes.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full sm:w-auto flex-1 min-w-[140px]">
              <label className="font-label-sm text-text-secondary">Status</label>
              <div className="relative">
                <select 
                  value={activeStatus} 
                  onChange={(e) => setActiveStatus(e.target.value)}
                  className="w-full appearance-none bg-white border border-border rounded-lg px-md py-sm font-body-sm text-text-primary focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  {statuses.map(status => <option key={status} value={status}>{status}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 pointer-events-none text-text-secondary text-[18px]">expand_more</span>
              </div>
            </div>
            
            {(activeDepartment !== 'All Positions' || activeRoleType !== 'All Types' || activeStatus !== 'Any Status') && (
              <button 
                onClick={() => {
                  setActiveDepartment('All Positions');
                  setActiveRoleType('All Types');
                  setActiveStatus('Any Status');
                }}
                className="text-error font-label-sm hover:underline py-sm px-sm w-full sm:w-auto shrink-0 text-center"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}

        {/* Desktop: Filters Panel */}
        {!isMobile && (
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white border border-border rounded-xl p-lg sticky top-24 shadow-sm">
              <div className="flex items-center gap-sm mb-lg border-b border-border pb-sm">
                <span className="material-symbols-outlined text-primary">tune</span>
                <h2 className="font-headline-sm text-headline-sm text-text-primary">Filters</h2>
              </div>

              {/* Department Filter */}
              <div className="mb-lg">
                <h3 className="font-label-md text-label-md text-text-secondary uppercase tracking-wider mb-sm">Departments</h3>
                <div className="flex flex-col gap-xs">
                  {departments.map(dept => (
                    <label key={dept} className="flex items-center gap-sm cursor-pointer group">
                      <input 
                        type="radio" 
                        name="department" 
                        className="w-4 h-4 text-primary focus:ring-primary border-border" 
                        checked={activeDepartment === dept}
                        onChange={() => setActiveDepartment(dept)}
                      />
                      <span className={`font-body-sm text-body-sm group-hover:text-primary transition-colors ${activeDepartment === dept ? 'text-primary font-bold' : 'text-text-primary'}`}>
                        {dept === 'All Positions' ? 'All Departments' : dept}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Role Type Filter */}
              <div className="mb-lg">
                <h3 className="font-label-md text-label-md text-text-secondary uppercase tracking-wider mb-sm">Role Type</h3>
                <div className="flex flex-wrap gap-xs">
                  {roleTypes.map(type => (
                    <button 
                      key={type}
                      onClick={() => setActiveRoleType(type)}
                      className={`px-sm py-1 rounded-full font-label-sm text-label-sm border transition-all ${activeRoleType === type ? 'bg-primary text-on-primary border-primary' : 'bg-surface-container-low text-text-secondary border-border hover:border-primary/50'}`}
                    >
                      {type === 'All Types' ? 'Any' : type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Filter */}
              <div>
                <h3 className="font-label-md text-label-md text-text-secondary uppercase tracking-wider mb-sm">Status</h3>
                <div className="flex flex-wrap gap-xs">
                  {statuses.map(status => (
                    <button 
                      key={status}
                      onClick={() => setActiveStatus(status)}
                      className={`px-sm py-1 rounded-full font-label-sm text-label-sm border transition-all ${activeStatus === status ? 'bg-primary text-on-primary border-primary' : 'bg-surface-container-low text-text-secondary border-border hover:border-primary/50'}`}
                    >
                      {status === 'Any Status' ? 'Any' : status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset Button */}
              {(activeDepartment !== 'All Positions' || activeRoleType !== 'All Types' || activeStatus !== 'Any Status') && (
                <div className="mt-xl pt-md border-t border-border">
                  <button 
                    onClick={() => {
                      setActiveDepartment('All Positions');
                      setActiveRoleType('All Types');
                      setActiveStatus('Any Status');
                    }}
                    className="w-full py-sm bg-error-container text-on-error-container font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </aside>
        )}

        {/* Recruitment Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-md">
            <p className="font-body-sm text-body-sm text-text-secondary">Showing <span className="font-bold text-text-primary">{filteredRecruitments.length}</span> positions</p>
            <div className="flex items-center gap-xs">
              <span className="font-label-sm text-label-sm text-text-secondary">Sort by:</span>
              <select className="bg-transparent font-label-sm text-label-sm text-text-primary outline-none cursor-pointer border-b border-dashed border-border pb-0.5">
                <option>Newest First</option>
                <option>Deadline</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          {filteredRecruitments.length > 0 ? (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-xs md:gap-lg">
              {filteredRecruitments.map(item => (
                <RecruitmentCard key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div className="bg-surface border border-border border-dashed rounded-xl p-3xl flex flex-col items-center justify-center text-center mt-lg">
              <span className="material-symbols-outlined text-5xl text-text-secondary mb-md">work_off</span>
              <h3 className="font-headline-md text-headline-md text-text-primary mb-xs">No positions found</h3>
              <p className="font-body-md text-body-md text-text-secondary max-w-sm">We couldn't find any positions matching your current filters. Try adjusting them or clearing all filters.</p>
              <button 
                onClick={() => {
                  setActiveDepartment('All Positions');
                  setActiveRoleType('All Types');
                  setActiveStatus('Any Status');
                }}
                className="mt-lg px-xl py-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-hover transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllRecruitmentsPage;
