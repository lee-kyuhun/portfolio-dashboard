"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6">
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="font-mono text-accent text-sm mb-5"
        >
          안녕하세요, 저는
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-hero-lg font-bold text-slate-white leading-tight"
        >
          Gromit.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-2 text-hero-lg font-bold text-slate leading-tight"
        >
          아이디어를 제품으로 만듭니다.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-6 max-w-xl text-hero-sm text-slate leading-relaxed"
        >
          풀스택 개발자로서 웹 서비스를 기획부터 배포까지 직접 만들어갑니다.
          <br />
          현재 다양한 사이드 프로젝트를 운영하고 있습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="inline-block rounded border border-accent px-6 py-3 text-sm font-mono text-accent transition-all hover:bg-accent-muted"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            className="inline-block rounded border border-slate/30 px-6 py-3 text-sm font-mono text-slate-light transition-all hover:border-accent hover:text-accent"
          >
            연락하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
