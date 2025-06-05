import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Star, Globe, Coffee, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 via-blue-200 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute left-1/4 top-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl dark:from-blue-900/30 dark:to-cyan-900/30"></div>
        <div className="animation-delay-2000 absolute right-1/4 top-1/3 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl dark:from-purple-900/30 dark:to-pink-900/30"></div>
        <div className="animation-delay-4000 absolute bottom-20 left-1/3 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl dark:from-cyan-900/30 dark:to-blue-900/30"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="mb-10 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-200/40 to-cyan-200/40 px-6 py-2 text-sm font-semibold text-blue-700 ring-1 ring-blue-300/40 dark:from-blue-900/40 dark:to-cyan-900/40 dark:text-cyan-100 dark:ring-blue-900/40">
              <Star className="mr-2 h-4 w-4" />
              Available for Projects
            </span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-700 bg-clip-text text-6xl font-bold text-transparent dark:from-cyan-200 dark:via-blue-200 dark:to-blue-100">
            Let's Create Something
            <span className="block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text pb-2 text-transparent dark:from-cyan-300 dark:to-blue-300">
              Amazing Together
            </span>
          </h2>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Primary Contact Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-blue-200/40 bg-gradient-to-br from-white/80 to-blue-100/80 p-8 backdrop-blur-xl transition-all duration-500 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-300/20 dark:border-blue-900/40 dark:from-gray-900/80 dark:to-blue-900/80 dark:hover:border-cyan-400/60 dark:hover:shadow-cyan-900/20 md:col-span-2 lg:col-span-2">
            <div className="relative">
              <div className="mb-8 flex items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg dark:from-cyan-700 dark:to-blue-700">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-cyan-100">Get in Touch</h3>
                  <p className="text-blue-700 dark:text-cyan-200">Let's start a conversation</p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {/* Email */}
                <div className="group/item flex cursor-pointer items-center rounded-2xl border border-blue-200/40 bg-white/60 p-4 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-100/60 dark:border-blue-900/40 dark:bg-gray-900/60 dark:hover:border-cyan-400/60 dark:hover:bg-blue-900/60">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg transition-transform duration-300 group-hover/item:scale-110 dark:from-cyan-700 dark:to-blue-700">
                    <Mail className="h-6 w-6 text-blue-900 dark:text-cyan-100" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-700 dark:text-cyan-200">Email</p>
                    <p className="font-semibold text-blue-900 transition-colors group-hover/item:text-cyan-700 dark:text-cyan-100 dark:group-hover/item:text-cyan-300">
                      caijianbopaul@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="group/item flex cursor-pointer items-center rounded-2xl border border-blue-200/40 bg-white/60 p-4 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-100/60 dark:border-blue-900/40 dark:bg-gray-900/60 dark:hover:border-cyan-400/60 dark:hover:bg-blue-900/60">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg transition-transform duration-300 group-hover/item:scale-110 dark:from-blue-700 dark:to-cyan-700">
                    <Phone className="h-6 w-6 text-blue-900 dark:text-cyan-100" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-700 dark:text-cyan-200">Phone</p>
                    <p className="font-semibold text-blue-900 transition-colors group-hover/item:text-cyan-700 dark:text-cyan-100 dark:group-hover/item:text-cyan-300">
                      87199362
                    </p>
                  </div>
                </div>
                <div className="flex justify-center space-x-6">
                  <a
                    href="#"
                    className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-gray-200 to-gray-400 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-gray-400/25 dark:from-gray-800 dark:to-gray-700 dark:hover:shadow-gray-900/25"
                  >
                    <Github className="h-8 w-8 text-blue-900 transition-transform duration-300 group-hover:scale-110 dark:text-cyan-100" />
                  </a>
                  <a
                    href="#"
                    className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-300 to-blue-500 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/25 dark:from-blue-800 dark:to-blue-700 dark:hover:shadow-cyan-900/25"
                  >
                    <Linkedin className="h-8 w-8 text-blue-900 transition-transform duration-300 group-hover:scale-110 dark:text-cyan-100" />
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/6587199362"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-green-200 to-green-400 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-green-300/25 dark:from-green-900 dark:to-green-700 dark:hover:shadow-green-900/25"
                  >
                    <svg
                      className="h-8 w-8 text-blue-900 dark:text-cyan-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12.004 2.003c-5.522 0-9.997 4.475-9.997 9.997 0 1.762.464 3.484 1.345 4.997L2.003 22l5.09-1.334c1.462.799 3.09 1.237 4.91 1.237 5.522 0 9.997-4.475 9.997-9.997 0-5.522-4.475-9.997-9.997-9.997zm0 17.995c-1.627 0-3.216-.438-4.58-1.267l-.327-.194-3.018.791.805-2.941-.213-.302c-.823-1.24-1.257-2.687-1.257-4.182 0-4.411 3.588-7.999 7.999-7.999 4.411 0 7.999 3.588 7.999 7.999 0 4.411-3.588 7.999-7.999 7.999z" />
                    </svg>
                  </a>
                  {/* Telegram */}
                  <a
                    href="https://t.me/caijianbopaul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-200 to-blue-400 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-300/25 dark:from-blue-900 dark:to-cyan-900 dark:hover:shadow-cyan-900/25"
                  >
                    <svg
                      className="h-8 w-8 text-blue-900 dark:text-cyan-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21.944 4.667c-.235-.192-.57-.235-.857-.107L2.7 12.53c-.32.14-.53.45-.53.8.002.35.215.66.537.797l4.13 1.74 2.01 6.13c.11.34.41.59.77.6h.02c.36 0 .67-.23.78-.57l2.01-6.13 4.13-1.74c.32-.14.53-.45.53-.8-.002-.35-.215-.66-.537-.797l-4.13-1.74-2.01-6.13c-.11-.34-.41-.59-.77-.6h-.02c-.36 0-.67.23-.78.57l-2.01 6.13-4.13 1.74c-.32.14-.53.45-.53.8.002.35.215.66.537.797l4.13 1.74 2.01 6.13c.11.34.41.59.77.6h.02c.36 0 .67-.23.78-.57l2.01-6.13 4.13-1.74c.32-.14.53-.45.53-.8-.002-.35-.215-.66-.537-.797z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Availability Card */}
          <div className="space-y-8">
            {/* Location Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-purple-200/40 bg-gradient-to-br from-white/80 to-purple-100/80 p-6 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-300/20 dark:border-purple-900/40 dark:from-gray-900/80 dark:to-purple-900/80 dark:hover:border-pink-400/60 dark:hover:shadow-pink-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-purple-900/10 dark:to-pink-900/10"></div>

              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-300 to-pink-300 shadow-lg dark:from-purple-700 dark:to-pink-700">
                  <MapPin className="h-7 w-7 text-blue-900 dark:text-cyan-100" />
                </div>
                <h4 className="mb-2 text-lg font-bold text-blue-900 dark:text-cyan-100">Location</h4>
                <p className="text-blue-700 dark:text-cyan-200">Singapore Central</p>
                <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-cyan-300">
                  <Globe className="mr-2 h-4 w-4" />
                  Available worldwide
                </div>
              </div>
            </div>

            {/* Coffee Chat Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-orange-200/40 bg-gradient-to-br from-white/80 to-orange-100/80 p-6 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:border-orange-400/60 hover:shadow-2xl hover:shadow-orange-300/20 dark:border-orange-900/40 dark:from-gray-900/80 dark:to-yellow-900/80 dark:hover:border-yellow-400/60 dark:hover:shadow-yellow-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-orange-900/10 dark:to-yellow-900/10"></div>

              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-300 to-yellow-300 shadow-lg dark:from-orange-700 dark:to-yellow-700">
                  <Coffee className="h-7 w-7 text-blue-900 dark:text-cyan-100" />
                </div>
                <h4 className="mb-2 text-lg font-bold text-blue-900 dark:text-cyan-100">Coffee Chat?</h4>
                <p className="text-blue-700 dark:text-cyan-200">Always up for a good conversation over coffee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-200/40 to-cyan-200/40 px-8 py-4 ring-1 ring-blue-300/40 dark:from-blue-900/40 dark:to-cyan-900/40 dark:ring-blue-900/40">
            <div className="mr-3 h-3 w-3 animate-pulse rounded-full bg-green-400 dark:bg-green-500"></div>
            <span className="text-lg font-semibold text-blue-700 dark:text-cyan-100">
              Currently accepting new projects
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
