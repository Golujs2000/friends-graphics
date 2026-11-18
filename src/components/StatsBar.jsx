import React from 'react';
import { Award, CheckCircle, Users, MapPin } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export default function StatsBar() {
  return (
    <div className="relative z-10 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-12 sm:mb-16">
      <div className="bg-gradient-to-br from-[#131926]/95 to-[#0e121d]/95 backdrop-blur-xl border border-[#ff6a00]/30 rounded-2xl p-4 sm:p-8 shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-8">
        {/* Stat 1 */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/30 flex items-center justify-center shrink-0 text-[#ff6a00]">
            <Award className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0">
            <div className="text-lg sm:text-3xl font-extrabold text-white leading-none">
              {companyDetails.yearsOfExperience}+ <span className="text-[#ff6a00]">Years</span>
            </div>
            <div className="text-[11px] sm:text-sm font-semibold text-slate-300 mt-1 truncate">Estd. {companyDetails.established}</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 truncate hidden xs:block">Printing Heritage</div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/30 flex items-center justify-center shrink-0 text-[#ff6a00]">
            <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0">
            <div className="text-lg sm:text-3xl font-extrabold text-white leading-none">
              5000+
            </div>
            <div className="text-[11px] sm:text-sm font-semibold text-slate-300 mt-1 truncate">Orders Delivered</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 truncate hidden xs:block">Commercial &amp; Retail</div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/30 flex items-center justify-center shrink-0 text-[#ff6a00]">
            <Users className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0">
            <div className="text-lg sm:text-3xl font-extrabold text-white leading-none">
              1000+
            </div>
            <div className="text-[11px] sm:text-sm font-semibold text-slate-300 mt-1 truncate">Happy Clients</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 truncate hidden xs:block">Businesses &amp; Retail</div>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/30 flex items-center justify-center shrink-0 text-[#ff6a00]">
            <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div className="min-w-0">
            <div className="text-lg sm:text-3xl font-extrabold text-[#ff6a00] leading-none truncate">
              Patna Hub
            </div>
            <div className="text-[11px] sm:text-sm font-semibold text-slate-300 mt-1 truncate">Bari Path</div>
            <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">Popular Palace B-12</div>
          </div>
        </div>
      </div>
    </div>
  );
}
