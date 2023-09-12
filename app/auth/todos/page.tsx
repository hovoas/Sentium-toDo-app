'use client';

import Head from 'next/head';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import TodoList from '@/components/TodoList';

export default function Todos() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <>
      <div className="w-full h-full bg-gray-200">
        {!session && (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <TodoList session={undefined} />
            <button
              className="btn-black w-full mt-12"
              onClick={async () => {
                const { error } = await supabase.auth.signOut();
                if (error) console.log('Error logging out:', error.message);
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
