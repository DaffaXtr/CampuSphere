import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import StepIndicator from '../../../components/common/StepIndicator';
import Breadcrumb from '../../../components/common/Breadcrumb';

const RecruitmentApplyStep2Page = () => {
  const { id } = useParams();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-md md:py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto min-h-screen flex flex-col">
      {/* Breadcrumb & Header */}
      <header className="mb-xl md:mb-2xl">
        <Breadcrumb items={[
          { label: 'Explore', path: '/explore' },
          { label: 'SDC Recruitment 2026', path: `/recruitment/${id || 1}` },
          { label: 'Apply' }
        ]} />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mt-md">
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
              currentStep={2} 
              nodeBgColor="bg-white" 
            />
            
            {/* Step 2 Content */}
            <form className="space-y-lg md:space-y-2xl">
              
              {/* Role Selection */}
              <div className="space-y-md">
                <div className="flex items-center gap-sm border-b border-border pb-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">work</span>
                  <h3 className="font-bold text-[14px] md:text-headline-md text-text-primary">Role Selection</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <label className="flex items-center gap-3 p-md rounded-xl border border-primary bg-primary-fixed/20 cursor-pointer transition-colors">
                    <input type="radio" name="role" value="frontend" className="w-4 h-4 text-primary focus:ring-primary" defaultChecked />
                    <span className="font-bold text-[13px] md:text-body-md text-text-primary">Frontend Developer</span>
                  </label>
                  <label className="flex items-center gap-3 p-md rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-colors">
                    <input type="radio" name="role" value="uiux" className="w-4 h-4 text-primary focus:ring-primary" />
                    <span className="font-bold text-[13px] md:text-body-md text-text-primary">UI/UX Designer</span>
                  </label>
                  <label className="flex items-center gap-3 p-md rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-colors">
                    <input type="radio" name="role" value="pm" className="w-4 h-4 text-primary focus:ring-primary" />
                    <span className="font-bold text-[13px] md:text-body-md text-text-primary">Project Manager</span>
                  </label>
                  <label className="flex items-center gap-3 p-md rounded-xl border border-border hover:border-primary/50 cursor-pointer transition-colors">
                    <input type="radio" name="role" value="backend" className="w-4 h-4 text-primary focus:ring-primary" />
                    <span className="font-bold text-[13px] md:text-body-md text-text-primary">Backend Developer</span>
                  </label>
                </div>
              </div>

              {/* Requirements Checklist */}
              <div className="space-y-md">
                <div className="flex items-center gap-sm border-b border-border pb-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">checklist</span>
                  <h3 className="font-bold text-[14px] md:text-headline-md text-text-primary">Mandatory Requirements</h3>
                </div>
                <div className="flex flex-col gap-sm">
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-surface hover:bg-surface-container transition-colors cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary" />
                    <span className="text-[12px] md:text-body-md text-text-primary">I am currently enrolled in at least one STEM-related course this semester.</span>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-surface hover:bg-surface-container transition-colors cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary" />
                    <span className="text-[12px] md:text-body-md text-text-primary">I have basic proficiency in Git/GitHub and collaborative workflows.</span>
                  </label>
                  <label className="flex items-start gap-3 p-3 rounded-lg bg-surface hover:bg-surface-container transition-colors cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary" />
                    <span className="text-[12px] md:text-body-md text-text-primary">I am willing and able to commit 5-10 hours per week for club projects.</span>
                  </label>
                </div>
              </div>

              {/* Portfolio & CV */}
              <div className="space-y-md">
                <div className="flex items-center gap-sm border-b border-border pb-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">folder_open</span>
                  <h3 className="font-bold text-[14px] md:text-headline-md text-text-primary">Portfolio & Resume</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md md:gap-lg">
                  <div className="flex flex-col gap-xs md:gap-sm">
                    <label className="font-bold text-[12px] md:font-label-md md:text-label-md text-text-primary">Portfolio Link (GitHub, Behance, etc.)</label>
                    <input className="w-full h-10 md:h-12 px-md rounded-lg border border-border focus:border-primary outline-none focus:ring-1 focus:ring-primary transition-all text-[13px] md:font-body-md md:text-body-md" placeholder="https://github.com/yourusername" type="url" />
                  </div>
                  <div className="flex flex-col gap-xs md:gap-sm">
                    <label className="font-bold text-[12px] md:font-label-md md:text-label-md text-text-primary">Upload Resume / CV (PDF max 5MB)</label>
                    <div className="w-full h-10 md:h-12 px-md rounded-lg border border-dashed border-border hover:border-primary bg-surface flex items-center justify-center cursor-pointer transition-colors">
                      <span className="flex items-center gap-2 text-text-secondary text-[12px] md:text-body-sm">
                        <span className="material-symbols-outlined text-[18px]">upload_file</span>
                        Click to upload file
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
            </form>
          </div>
        </div>
        
        {/* Right Column: Summary */}
        <div className="lg:col-span-4 mt-md lg:mt-0">
          <div className="bg-white border border-border rounded-xl overflow-hidden flex flex-col shadow-sm">
            <div className="relative h-40 md:h-48 w-full bg-surface-container">
              <img alt="SDC Recruitment Poster" className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYXjKaOYj38rvdw5FTMz4hNI65pj-zmRRK5dkCRFK21NA-CNACfBl8_DiMDqRGyEjjQgZJV_gq44_AHMRkW7wRuEPv9IBvt0ay5nsRRdbBx2hn_rAkdrdD1pT7vjbwGpi7EZHWAeuGzMohGwkRqtCXZ7vDHLjO_l4Fz3TChzcHNG6G2hCaB-Pl61yhCgL1O8mf1GCI2LCZGY4GJIGEX4Tt1E54S462SQxrM7NnPaLKL0idK4-jGQs54VrW4uHV794xKxXiXJ_sDWNR" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                </div>
              </div>
              <div className="border-t border-border pt-md md:pt-lg">
                <div className="flex justify-between items-center mb-sm">
                  <span className="font-bold text-[12px] md:font-label-md md:text-label-md text-text-secondary">Selected Role</span>
                  <span className="font-bold text-[12px] md:font-label-md md:text-label-md text-primary">Frontend Developer</span>
                </div>
                
                <div className="flex items-start gap-sm mt-md mb-xl">
                  <span className="material-symbols-outlined text-warning text-[18px]">info</span>
                  <p className="text-[10px] md:font-body-sm md:text-body-sm text-text-secondary">Make sure all mandatory requirements are checked and portfolio is provided before proceeding.</p>
                </div>
                
                <Link to={`/recruitment/${id || 1}/apply/step3`} className="w-full bg-primary text-on-primary font-bold text-[13px] md:font-label-md md:text-label-md py-sm md:py-md rounded-lg hover:bg-primary-hover active:scale-95 transition-all flex items-center justify-center gap-xs md:gap-sm">
                  Submit Application
                  <span className="material-symbols-outlined text-[18px]">done_all</span>
                </Link>
                <Link to={`/recruitment/${id || 1}/apply`} className="w-full mt-2 text-text-secondary font-bold text-[12px] md:font-label-md md:text-label-md py-2 rounded-lg hover:bg-surface transition-all flex items-center justify-center">
                  Back to Personal Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentApplyStep2Page;
