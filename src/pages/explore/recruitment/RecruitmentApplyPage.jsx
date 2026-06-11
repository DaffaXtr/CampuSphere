import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import StepIndicator from '../../../components/common/StepIndicator';
import Breadcrumb from '../../../components/common/Breadcrumb';

const RecruitmentApplyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    navigate(`/recruitment/${id || 1}/apply/step2`);
  };

  return (
    <div className="py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      {/* Breadcrumb & Header */}
      <header className="mb-xl md:mb-2xl">
        <Breadcrumb items={[
          { label: 'Explore', path: '/explore' },
          { label: 'SDC Recruitment 2026', path: `/recruitment/${id || 1}` },
          { label: 'Apply' }
        ]} />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
          <div>
            <h1 className="font-bold text-headline-md md:font-headline-xl md:text-headline-xl text-text-primary tracking-tight mb-2">Application Form</h1>
            <p className="font-body-sm md:font-body-md md:text-body-md text-text-secondary">Take the first step to join our community of innovators.</p>
          </div>
          <div className="flex items-center gap-2 bg-primary-fixed text-primary px-md py-1 rounded-full w-fit">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
            <span className="font-label-sm text-[10px] md:text-label-sm">Closing in 10 days</span>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl md:gap-gutter">
        {/* Left Column: Application Form */}
        <div className="lg:col-span-8">
          <div className="bg-white border border-border rounded-xl p-md md:p-lg shadow-sm">
            {/* Steps Indicator */}
            <StepIndicator 
              steps={['Personal Info', 'Requirements', 'Confirmation']} 
              currentStep={1} 
              nodeBgColor="bg-white" 
            />
            
            {/* Step 1 Content */}
            <form className="space-y-lg md:space-y-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
                <div className="flex flex-col gap-xs md:gap-sm">
                  <label className="font-bold text-[12px] md:font-label-md md:text-label-md text-text-primary">Full Name</label>
                  <input className="w-full h-10 md:h-12 px-md rounded-lg border border-border focus:border-primary outline-none focus:ring-1 focus:ring-primary transition-all text-[13px] md:font-body-md md:text-body-md" placeholder="e.g., Alex Johnson" type="text" />
                </div>
                <div className="flex flex-col gap-xs md:gap-sm">
                  <label className="font-bold text-[12px] md:font-label-md md:text-label-md text-text-primary">Student ID (NIM)</label>
                  <input className="w-full h-10 md:h-12 px-md rounded-lg border border-border focus:border-primary outline-none focus:ring-1 focus:ring-primary transition-all text-[13px] md:font-body-md md:text-body-md" placeholder="e.g., 202610110" type="text" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
                <div className="flex flex-col gap-xs md:gap-sm">
                  <label className="font-bold text-[12px] md:font-label-md md:text-label-md text-text-primary">Major / Faculty</label>
                  <select className="w-full h-10 md:h-12 px-md rounded-lg border border-border focus:border-primary outline-none focus:ring-1 focus:ring-primary transition-all text-[13px] md:font-body-md md:text-body-md bg-white" defaultValue="">
                    <option disabled value="">Select your faculty</option>
                    <option>Faculty of Computer Science</option>
                    <option>Faculty of Engineering</option>
                    <option>Faculty of Business</option>
                    <option>Faculty of Arts</option>
                  </select>
                </div>
                <div className="flex flex-col gap-xs md:gap-sm">
                  <label className="font-bold text-[12px] md:font-label-md md:text-label-md text-text-primary">Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[13px] md:text-body-md">+62</span>
                    <input className="w-full h-10 md:h-12 pl-12 md:pl-16 pr-md rounded-lg border border-border focus:border-primary outline-none focus:ring-1 focus:ring-primary transition-all text-[13px] md:font-body-md md:text-body-md" placeholder="812 3456 7890" type="tel" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-xs md:gap-sm">
                <label className="font-bold text-[12px] md:font-label-md md:text-label-md text-text-primary">University Email</label>
                <input className="w-full h-10 md:h-12 px-md rounded-lg border border-border focus:border-primary outline-none focus:ring-1 focus:ring-primary transition-all text-[13px] md:font-body-md md:text-body-md" placeholder="alex.j@university.ac.id" type="email" />
              </div>
              
              <div className="p-sm md:p-md rounded-lg bg-surface flex gap-sm md:gap-md items-start">
                <input className="mt-1 rounded text-primary focus:ring-primary" id="terms" type="checkbox" />
                <label className="text-[11px] md:font-body-sm md:text-body-sm text-text-secondary leading-relaxed" htmlFor="terms">
                  I certify that the information provided is accurate and I understand that any false information may result in the rejection of my application.
                </label>
              </div>
            </form>
          </div>
        </div>
        
        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4 mt-md lg:mt-0">
          <div className="bg-white border border-border rounded-xl overflow-hidden flex flex-col shadow-sm">
            <div className="relative h-40 md:h-48 w-full bg-surface-container">
              <img alt="SDC Recruitment Poster" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXjKaOYj38rvdw5FTMz4hNI65pj-zmRRK5dkCRFK21NA-CNACfBl8_DiMDqRGyEjjQgZJV_gq44_AHMRkW7wRuEPv9IBvt0ay5nsRRdbBx2hn_rAkdrdD1pT7vjbwGpi7EZHWAeuGzMohGwkRqtCXZ7vDHLjO_l4Fz3TChzcHNG6G2hCaB-Pl61yhCgL1O8mf1GCI2LCZGY4GJIGEX4Tt1E54S462SQxrM7NnPaLKL0idK4-jGQs54VrW4uHV794xKxXiXJ_sDWNR" />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                <span className="bg-primary text-on-primary px-2 py-0.5 md:px-3 md:py-1 rounded-full font-bold text-[10px] md:font-label-sm md:text-label-sm">Recruitment</span>
              </div>
            </div>
            <div className="p-md md:p-lg flex flex-col gap-md md:gap-lg">
              <div>
                <h3 className="font-bold text-[16px] md:font-headline-md md:text-headline-md text-text-primary mb-xs md:mb-sm">Student Developer Club</h3>
                <div className="space-y-1 md:space-y-sm">
                  <div className="flex items-center gap-xs md:gap-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px] md:text-sm">groups</span>
                    <span className="text-[11px] md:font-body-sm md:text-body-sm">Staff Recruitment 2026</span>
                  </div>
                  <div className="flex items-center gap-xs md:gap-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[14px] md:text-sm">schedule</span>
                    <span className="text-[11px] md:font-body-sm md:text-body-sm">Deadline: March 25, 2026</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-border pt-md md:pt-lg">
                <div className="flex justify-between items-center mb-sm">
                  <span className="font-bold text-[12px] md:font-label-md md:text-label-md text-text-secondary">Selected Role</span>
                  <span className="font-bold text-[12px] md:font-label-md md:text-label-md text-text-primary">Not Selected</span>
                </div>
                <p className="text-[11px] md:font-body-sm md:text-body-sm text-on-surface-variant mb-md md:mb-xl italic">You will select your role in the next step.</p>
                
                <Link to={`/recruitment/${id || 1}/apply/step2`} className="w-full bg-primary text-on-primary font-bold text-[13px] md:font-label-md md:text-label-md py-sm md:py-md rounded-lg hover:bg-primary-hover active:scale-95 transition-all flex items-center justify-center gap-xs md:gap-sm">
                  Proceed to Next Step
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-md md:mt-lg p-sm md:p-md rounded-xl border border-primary bg-primary-fixed/30 flex gap-sm md:gap-md items-center">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[16px] md:text-[24px]">info</span>
            </div>
            <p className="text-[11px] md:font-body-sm md:text-body-sm text-text-secondary leading-relaxed">Please make sure to use your active university email for further announcements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentApplyPage;
