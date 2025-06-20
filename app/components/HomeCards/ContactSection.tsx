import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Zap, Globe } from 'lucide-react';
import ThemedAnimatedBackground from '../tools/Animation/ThemedAnimatedBackground';

const ContactSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Themed Animated Background */}
      <ThemedAnimatedBackground colorTheme="contact" />

      {/* Perspective Container for 3D Effects */}
      <div className="relative min-h-screen" style={{ perspective: '1000px' }}>
        <div className="container relative mx-auto px-4 py-20 lg:px-8">
          {/* Futuristic Header */}
          <div className="mb-20 text-center">
            <div className="mb-8 inline-flex">
              <span className="relative overflow-hidden rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-8 py-3 backdrop-blur-xl">
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
                <div className="relative flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm font-semibold text-cyan-300">AVAILABLE FOR PROJECTS</span>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                </div>
              </span>
            </div>

            <h1 className="mb-6 text-6xl font-black tracking-tight md:text-8xl">
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                LET&apos;S
              </span>
              <span className="block animate-pulse bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                CONNECT
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-cyan-200/80">
              Ready to bring your next big idea to life? Let&apos;s create something extraordinary together.
            </p>
          </div>

          {/* Floating Contact Network */}
          <div className="relative mx-auto max-w-6xl">
            {/* Central Contact Hub */}
            <div className="relative z-10 mx-auto mb-20 max-w-2xl">
              <div
                className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-white/5 to-cyan-900/10 p-8 backdrop-blur-2xl transition-all duration-700 hover:border-cyan-400/40 hover:bg-gradient-to-br hover:from-white/10 hover:to-cyan-900/20"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 25px 50px -12px rgba(0, 255, 255, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'rotateX(5deg) rotateY(-5deg) translateZ(20px)';
                  e.currentTarget.style.boxShadow = '0 35px 70px -12px rgba(0, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 255, 255, 0.1)';
                }}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 p-[1px]">
                  <div className="h-full w-full rounded-3xl bg-gradient-to-br from-gray-900/80 to-cyan-900/20 backdrop-blur-2xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white">PRIMARY CONTACT</h2>
                    <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                  </div>

                  <div className="space-y-6">
                    {/* Email */}
                    <a href="mailto:caijianbopaul@gmail.com" className="group/item block">
                      <div className="flex items-center space-x-6 rounded-2xl border border-cyan-500/10 bg-gradient-to-r from-white/5 to-cyan-900/10 p-6 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-cyan-400/30 hover:bg-gradient-to-r hover:from-white/10 hover:to-cyan-900/20">
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg transition-transform duration-500 group-hover/item:rotate-12 group-hover/item:scale-110">
                          <Mail className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium uppercase tracking-wide text-cyan-300">Email Address</p>
                          <p className="text-xl font-bold text-white transition-colors group-hover/item:text-cyan-300">
                            caijianbopaul@gmail.com
                          </p>
                        </div>
                      </div>
                    </a>

                    {/* Phone */}
                    <a href="tel:+6587199362" className="group/item block">
                      <div className="flex items-center space-x-6 rounded-2xl border border-blue-500/10 bg-gradient-to-r from-white/5 to-blue-900/10 p-6 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-blue-400/30 hover:bg-gradient-to-r hover:from-white/10 hover:to-blue-900/20">
                        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg transition-transform duration-500 group-hover/item:rotate-12 group-hover/item:scale-110">
                          <Phone className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium uppercase tracking-wide text-blue-300">Phone Number</p>
                          <p className="text-xl font-bold text-white transition-colors group-hover/item:text-blue-300">
                            +65 8719 9362
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Social Cards */}
            <div className="relative">
              {/* GitHub - Top Left */}
              <div className="absolute -top-10 left-0 md:left-10 lg:left-20" style={{ transform: 'translateZ(30px)' }}>
                <a
                  href="#"
                  className="group block"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(50px) rotateY(15deg) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(30px) rotateY(0deg) scale(1)';
                  }}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-gray-600/30 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-gray-400/50">
                    <Github className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </a>
              </div>

              {/* LinkedIn - Top Right */}
              <div
                className="absolute -top-10 right-0 md:right-10 lg:right-20"
                style={{ transform: 'translateZ(25px)' }}
              >
                <a
                  href="https://www.linkedin.com/in/jianbo-cai-4540242a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(45px) rotateY(-15deg) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(25px) rotateY(0deg) scale(1)';
                  }}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-600 to-blue-800 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-blue-400/50">
                    <Linkedin className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </a>
              </div>

              {/* WhatsApp - Bottom Left */}
              <div
                className="absolute -bottom-10 left-0 md:left-16 lg:left-32"
                style={{ transform: 'translateZ(20px)' }}
              >
                <a
                  href="https://wa.me/6587199362"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(40px) rotateX(10deg) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(20px) rotateX(0deg) scale(1)';
                  }}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-green-400/30 bg-gradient-to-br from-green-500 to-green-700 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-green-300/50">
                    <svg
                      className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12.004 2.003c-5.522 0-9.997 4.475-9.997 9.997 0 1.762.464 3.484 1.345 4.997L2.003 22l5.09-1.334c1.462.799 3.09 1.237 4.91 1.237 5.522 0 9.997-4.475 9.997-9.997 0-5.522-4.475-9.997-9.997-9.997z" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Telegram - Bottom Right */}
              <div
                className="absolute -bottom-10 right-0 md:right-16 lg:right-32"
                style={{ transform: 'translateZ(35px)' }}
              >
                <a
                  href="https://t.me/LboVboE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(55px) rotateX(-10deg) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(35px) rotateX(0deg) scale(1)';
                  }}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-500 to-blue-600 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-sky-300/50">
                    <svg
                      className="h-10 w-10 text-white transition-transform duration-300 group-hover:scale-110"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Location Card - Center Bottom */}
              <div
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 transform"
                style={{ transform: 'translateX(-50%) translateZ(15px)' }}
              >
                <div
                  className="group cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(-50%) translateZ(35px) rotateY(5deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(-50%) translateZ(15px) rotateY(0deg)';
                  }}
                >
                  <div className="flex items-center space-x-4 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 px-6 py-4 backdrop-blur-xl transition-all duration-500 hover:border-purple-400/40 hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-wide text-purple-300">Location</p>
                      <p className="text-lg font-bold text-white">Singapore</p>
                    </div>
                    <div className="flex items-center text-purple-300">
                      <Globe className="mr-1 h-4 w-4" />
                      <span className="text-xs">Remote Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
