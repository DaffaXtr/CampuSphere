
import { Link } from 'react-router-dom';

const EventDetailPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img alt="Grand Annual Tech Seminar 2026" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUgfB36f2rwVZ3s0M8gQ6NBeu2Rot3NaEfFK4le0kGRd3LnV1GlNTbfQGKfKQjg-WwzNMQl4hb4iTEhtWG5W6tQzVVip119lfFsGU_DU6xsnjOSTCiVHpD3bbRN89D_FWQMIdKdXkN6uv0eQvSamCkxPsRXdxuwPytFVfwcZskfRkAQKzvkG2CNCJi17qhE7t33jHw_KEHASp3R6VbZOz1_QHp6_82DMjZxtBDOGbl6Mxdzo8xvk1J1VbodtgARydasjALfvq6ZZ3H"/>
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-on-surface/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full px-margin-mobile md:px-margin-desktop py-2xl">
          <div className="max-w-4xl">
            <span className="inline-block px-md py-xs bg-primary-container text-on-primary-container rounded-full font-label-sm text-label-sm mb-md uppercase tracking-wider">Major Event 2026</span>
            <h1 className="font-headline-xl text-headline-xl text-white mb-md drop-shadow-lg">Grand Annual Tech Seminar 2026</h1>
          </div>
        </div>
      </section>
      
      {/* Main Content & Sidebar */}
      <div className="px-margin-mobile md:px-margin-desktop py-xl md:py-3xl max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Left Column: Event Details */}
          <div className="lg:col-span-8 space-y-2xl">
            {/* Meta Info Row */}
            <div className="flex flex-wrap gap-lg bg-surface p-lg rounded-xl border border-border">
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">calendar_today</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-text-secondary">Date</p>
                  <p className="font-label-md text-label-md text-text-primary">June 25, 2026</p>
                </div>
              </div>
              <div className="w-px h-10 bg-border hidden md:block"></div>
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-text-secondary">Time</p>
                  <p className="font-label-md text-label-md text-text-primary">09:00 AM - 04:00 PM</p>
                </div>
              </div>
              <div className="w-px h-10 bg-border hidden md:block"></div>
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-text-secondary">Location</p>
                  <p className="font-label-md text-label-md text-text-primary">Airlangga Convention Center</p>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <article className="space-y-md">
              <h2 className="font-headline-lg text-headline-lg text-text-primary">About the Seminar</h2>
              <div className="font-body-lg text-body-lg text-text-secondary space-y-md leading-relaxed">
                <p>Step into the future of innovation at the Grand Annual Tech Seminar 2026. This year's flagship event brings together the brightest minds from the global technology sector to explore the rapidly evolving landscape of artificial intelligence, sustainable computing, and digital transformation.</p>
                <p>Featuring a series of high-impact keynote presentations from executives of global tech giants, the seminar is designed to provide actionable insights. Beyond theoretical discussions, attendees will participate in exclusive hands-on workshops focused on emerging AI trends, including generative models and ethical automation frameworks.</p>
              </div>
            </article>
            
            {/* Speakers Section */}
            <section className="space-y-xl">
              <h2 className="font-headline-lg text-headline-lg text-text-primary">Keynote Speakers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
                {/* Speaker 1 */}
                <div className="group text-center">
                  <div className="relative inline-block mb-md">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-primary-container transition-colors">
                      <img className="w-full h-full object-cover" data-alt="A professional headshot of a female technology executive with a confident smile, wearing a modern charcoal blazer, set against a soft-focus architectural background with cool daylight lighting. The image should feel high-end and professional, aligning with a corporate tech innovation theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaqstmPebm7ExELjJzuZSB6_I-Pup5fmewVX68DQJt7tO9-ga4EHsYM7fpqoC3cStaiU-gt_PE1YXKAcJ5lKBgfJmiPCaJMa81iZaKJdlzjN9coHYlPoepZvqFZkSSRVU2QCmQetqfVJ7gML5Ho89Lc90zJwFY9sdi7Hr3dUXsozHhisELf_n0Bju5PH5ElPwWxeaAvT8wLT6BUfZuagwZ8DUwVRGArsGPyH9c9zMaBXxyRBe38t7Y_ot3a6wi4PmilU61YCZVhvyf"/>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">Sarah Chen</h3>
                  <p className="font-body-md text-body-md text-text-secondary">Chief AI Architect, Google</p>
                </div>
                {/* Speaker 2 */}
                <div className="group text-center">
                  <div className="relative inline-block mb-md">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-primary-container transition-colors">
                      <img className="w-full h-full object-cover" data-alt="A professional headshot of a male software engineer with glasses and a smart-casual navy shirt, looking thoughtfully towards the camera. The setting is a bright, modern office with clean lines and natural light pouring through large windows, creating a crisp and intellectual aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv3jZpm3-fPkRb06carIDJmfEOwmhrxVm6DYKyK91OKR8sJAMddqehm7SMt7d6EcgvnyXwTge1K1hzha5ztq_grwsYgwO90aMrRjfTRW1nXkDP9aepAy5EhEyVBafh6DKpgYk7aoIi6sc4RKr4zJRPKEYIx4rSc8stEGow4_MzbOI1CefGWVfO197FPKIn81unMYGXDzRKT8XJrxuv8d8JwcMBPUymeJuFuuS2QrNuGUI8qMJZI-gFSbia_fWdhXgJMdU3fykIK8ZD"/>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">David Hoffmann</h3>
                  <p className="font-body-md text-body-md text-text-secondary">VP of Innovation, NVIDIA</p>
                </div>
                {/* Speaker 3 */}
                <div className="group text-center">
                  <div className="relative inline-block mb-md">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:border-primary-container transition-colors">
                      <img className="w-full h-full object-cover" data-alt="A portrait of a female research scientist in her late 30s with a sharp, professional look, wearing a minimalist silk blouse. The background is a blurred high-tech laboratory environment with subtle blue and white light accents, representing a state-of-the-art technological setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVkM_hb3Uofo7B6n4pbEIen1PVEKoPaWxDcmBs-dm_085_hDUQczYlUHGAXUzt_FxL0T_uGMPC2UGA4auwSLgf6hhTW0qWS0H3q87Rtb1DVC7cKftoE40hI6aQHqHeTHM0YlDTcFM8EUohfpkmWSqRx63M2JIrOtXuHBL9qGpWnzwEMeBkikfXe1LtB9eark2xECBGmtxhel64Uc_E2d-cua9rAT16O7RtISN38U3-vXcE6VqKwPvzLSSnmYKZ1i4ZOGbmvDndE68-"/>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-text-primary">Elena Rodriguez</h3>
                  <p className="font-body-md text-body-md text-text-secondary">Director of Ethics, OpenAI</p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Right Sidebar / Action Area */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-lg">
              {/* Registration Card */}
              <div className="bg-white p-xl rounded-2xl border border-border shadow-sm">
                <div className="flex justify-between items-center mb-lg">
                  <span className="font-label-md text-label-md text-text-secondary">Ticket Price</span>
                  <span className="font-headline-md text-headline-md text-success">Free for Students</span>
                </div>
                <Link to="/event/1/register" className="w-full py-md bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-hover transition-all transform active:scale-95 mb-md flex items-center justify-center gap-sm cursor-pointer">
                  <span className="material-symbols-outlined">local_activity</span>
                  Register Ticket
                </Link>
                <a className="w-full py-md bg-surface text-primary border border-primary-fixed rounded-xl font-label-md text-label-md hover:bg-primary-fixed/20 transition-all flex items-center justify-center gap-sm" href="#">
                  <span className="material-symbols-outlined">calendar_add_on</span>
                  Add to Calendar
                </a>
                <div className="mt-xl pt-lg border-t border-border">
                  <p className="font-body-sm text-body-sm text-text-secondary mb-md">Includes: Access to all keynote sessions, lunch buffet, digital certificate, and workshop materials.</p>
                  <div className="flex items-center gap-sm text-warning">
                    <span className="material-symbols-outlined text-[18px]">info</span>
                    <span className="font-label-sm text-label-sm">Limited seats available</span>
                  </div>
                </div>
              </div>
              
              {/* Map Card */}
              <div className="bg-white p-lg rounded-2xl border border-border overflow-hidden">
                <h4 className="font-label-md text-label-md text-text-primary mb-md">Event Location</h4>
                <div className="h-48 bg-surface-container rounded-lg overflow-hidden relative">
                  <img alt="Map location of Airlangga Convention Center" className="w-full h-full object-cover grayscale opacity-50" data-location="Surabaya" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMsTiWIrME6hGEpPyZWW_j6IVdY858uETOqulg3RyXoxqhqSUBeoRuTFKD8lyswIgtYXFdyWQqiKC_wvQKNlaxo5jYyvduHPj4HVNgGP1M8q1VWXXKFfIYvXGIQnK1ShBPw6IYwRYgozcfG8iz9TUrYEWU5g29AbE56eI3CQyEmGh2HheOqsvK0YI2q03IlsvqB0ymlVQhlvhEUfoQWve_9gKx5DAJSsLD5MTWVh-Panb9LvjlXwH2CHLVMlUabXe2noTxjziSH6KN"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary text-white p-2 rounded-full shadow-lg animate-bounce">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                  </div>
                </div>
                <p className="mt-md font-body-sm text-body-sm text-text-secondary">Kampus C UNAIR, Mulyorejo, Surabaya, East Java</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default EventDetailPage;
