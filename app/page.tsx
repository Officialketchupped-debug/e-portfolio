import Navigation  from '@/app/components/Navigation';
import UserProfile from '@/app/components/User-Profile';
import {SkillsSection} from '@/app/components/Skill-Section';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="flex flex-col min-h-[calc(100vh-120px)]  bg-gray-900 text-gray-100">
        <UserProfile />
        <SkillsSection />
      </main>
    </div>
  );
}