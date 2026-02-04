'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';
import { profile } from '@/data/profile';

interface VideoProfileProps {
  videoUrl?: string;
  className?: string;
}

const VideoProfile = ({ 
  videoUrl = 'https://www.loom.com/embed/0a1808173b4549979815aa54406695d5?sid=f0a5b9a2-cf91-4eaa-ab95-e1ce8c24d35d',
  className = ''
}: VideoProfileProps) => {
  const [showVideo, setShowVideo] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl p-1 shadow-2xl glow-blue">
          <div className="aspect-video bg-white dark:bg-gray-800 rounded-xl overflow-hidden relative">
            {!showVideo && (
              <>
                {/* Thumbnail with profile image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-purple-50 dark:from-gray-800 dark:to-purple-900">
                  <div className="text-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full p-1">
                      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden relative">
                        {profile.image ? (
                          <Image 
                            src={profile.image} 
                            alt={profile.name}
                            fill
                            className="object-cover rounded-full"
                            sizes="96px"
                            priority
                          />
                        ) : (
                          <span className="text-xl font-bold text-gradient">
                            {profile.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Professional Introduction
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Watch my introduction video about AI infrastructure and automation
                    </p>
                  </div>
                </div>

                {/* Large Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePlayClick}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-2xl transition-colors">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1" />
                  </div>
                </motion.div>
              </>
            )}

            {showVideo && (
              <iframe
                ref={iframeRef}
                src={`${videoUrl}&autoplay=1&hideEmbedTopBar=true`}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
                title="Professional Introduction Video"
              />
            )}
          </div>
        </div>

        {/* Video caption */}
        <motion.p 
          className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {showVideo ? 'Innovative AI Infrastructure and Automation' : 'Click to watch my professional introduction'}
        </motion.p>
      </div>
    </div>
  );
};

export default VideoProfile;
