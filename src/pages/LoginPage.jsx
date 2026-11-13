import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both your university email and password.");
      return;
    }

    console.log("Logging in:", { role, email, password, rememberMe });

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row font-sans selection:bg-[#C8A887]/30">
      {/* LEFT PANEL*/}
      <div className="lg:w-1/2 bg-[#461E26] text-[#EFE6DD] p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* header */}
        <div>
          <div className="flex items-center gap-3">
            <span
              className="text-2xl sm:text-3xl text-[#C8A887] tracking-wider"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              E / V
            </span>
            <span
              className="text-2xl sm:text-3xl tracking-wide text-[#EFE6DD]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              EduVerse
            </span>
          </div>
          <p className="text-[10px] tracking-[0.25em] text-[#C8A887]/80 uppercase mt-3">
            EST. FOR THE CURIOUS
          </p>
          <div className="h-px w-full bg-[#C8A887]/30 mt-5" />
        </div>

        {/* center circle */}
        <div className="my-12 lg:my-0 flex items-center justify-center">
          <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#C8A887]/30 flex items-center justify-center p-3">
            <div className="w-full h-full rounded-full border border-[#C8A887]/20 flex flex-col items-center justify-center text-center px-8">
              <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#C8A887] uppercase mb-5">
                THE SCHOLAR'S COMPANION
              </span>

              <h1
                className="text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] font-normal text-[#EFE6DD]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                A universe
                <br />
                <span className="italic font-normal">of possibility.</span>
              </h1>

              <span className="text-[9px] tracking-[0.2em] text-[#C8A887]/90 uppercase mt-7">
                KNOWLEDGE - COMMUNITY - GROWTH
              </span>
            </div>
          </div>
        </div>

        <div className="text-center max-w-md mx-auto">
          <blockquote
            className="italic text-lg sm:text-xl text-[#EFE6DD]/90 leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            “Even strength must bow to wisdom sometimes.”
          </blockquote>
          <p className="text-[10px] tracking-[0.25em] text-[#C8A887]/75 uppercase mt-3">
            ANNABETH CHASE
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="lg:w-1/2 bg-[#181715] text-[#EFE6DD] p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
        {/* register prompt */}
        <div className="flex justify-end items-center gap-2 text-xs">
          <span className="text-[#8E8880]">New to EduVerse?</span>
          <Link
            to="/register"
            className="text-[#C8A887] hover:text-[#DFC2A4] transition-colors inline-flex items-center gap-1 font-medium"
          >
            Create an account
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto my-12 lg:my-0">
          <p className="text-[10px] tracking-[0.25em] text-[#C8A887] uppercase mb-2">
            WELCOME BACK, SCHOLAR
          </p>
          <h2
            className="text-3xl sm:text-4xl font-normal text-[#EFE6DD] tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Your next chapter awaits.
          </h2>
          <p className="text-xs sm:text-sm text-[#8E8880] mt-1.5 mb-8">
            Settle in. Your academic universe is right here.
          </p>

          {error && (
            <div className="mb-5 px-4 py-2.5 rounded bg-[#5E232E]/40 border border-[#C8A887]/40 text-xs text-[#EFE6DD]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* role selector */}
            <div>
              <label className="block text-xs text-[#A8A29A] mb-2">
                Continue as
              </label>
              <div className="grid grid-cols-2 p-1 rounded bg-[#23221F] border border-[#33312D]">
                <button
                  type="button"
                  onClick={() => setRole("Student")}
                  className={`py-2 px-4 rounded text-xs font-medium transition-all cursor-pointer ${
                    role === "Student"
                      ? "bg-[#354338] text-[#EFE6DD] shadow-sm"
                      : "text-[#8E8880] hover:text-[#EFE6DD]"
                  }`}
                >
                  Student
                </button>
                <button
                  type="button"
                  onClick={() => setRole("Administrator")}
                  className={`py-2 px-4 rounded text-xs font-medium transition-all cursor-pointer ${
                    role === "Administrator"
                      ? "bg-[#354338] text-[#EFE6DD] shadow-sm"
                      : "text-[#8E8880] hover:text-[#EFE6DD]"
                  }`}
                >
                  Administrator
                </button>
              </div>
            </div>

            {/* university email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs text-[#A8A29A] mb-2"
              >
                University email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@university.edu"
                className="w-full px-3.5 py-2.5 rounded bg-[#23221F] border border-[#33312D] text-sm text-[#EFE6DD] placeholder-[#6B665F] focus:outline-none focus:border-[#C8A887] transition-colors"
              />
            </div>

            {/* password */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs text-[#A8A29A] mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 rounded bg-[#23221F] border border-[#33312D] text-sm text-[#EFE6DD] placeholder-[#6B665F] focus:outline-none focus:border-[#C8A887] transition-colors tracking-widest"
              />
            </div>

            {/* remember me & forgot password */}
            <div className="flex items-center justify-between text-xs pt-0.5">
              <label className="inline-flex items-center gap-2 text-[#8E8880] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 rounded bg-[#23221F] border-[#3E3B36] accent-[#4F212A] cursor-pointer"
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                onClick={() => alert("Password reset flow coming soon!")}
                className="text-[#C8A887] hover:text-[#DFC2A4] transition-colors cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-5 rounded bg-[#4F212A] hover:bg-[#5F2833] text-[#EFE6DD] text-xs font-medium tracking-wide transition-colors flex items-center justify-between cursor-pointer mt-2"
            >
              <span className="w-4" />
              <span>Enter EduVerse</span>
              <span aria-hidden="true" className="text-sm">
                →
              </span>
            </button>
          </form>
        </div>

        <div className="text-center">
          <p className="text-[11px] text-[#6B665F]">
            A little progress, every day.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
