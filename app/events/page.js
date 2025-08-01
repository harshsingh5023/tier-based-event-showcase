"use client";
import { useUser, UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { getTierColor, canAccessEvent } from "../../lib/tiers";

export default function EventsPage() {
  const { user, isLoaded } = useUser();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  console.log("User object:", user);
  console.log("Public metadata:", user?.publicMetadata);

  const userTier = user?.unsafeMetadata?.tier || "free";

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("event_date", { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateTier = async (newTier) => {
    if (!user) return;
    try {
      await user.update({
        unsafeMetadata: { ...user.unsafeMetadata, tier: newTier },
      });
    } catch (error) {
      console.error("Error updating tier:", error);
    }
  };

  console.log("isLoaded:", isLoaded, "user:", !!user, "loading:", loading);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-xl animate-pulse">Loading user...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-xl animate-in fade-in duration-500">No user found. Please sign in.</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-xl">Loading events...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 animate-in fade-in duration-700">
      <header className="bg-white shadow-xl border-b border-gray-100 animate-in slide-in-from-top duration-500">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-in slide-in-from-left duration-500 delay-200">
            Events
          </h1>
          <div className="flex items-center gap-6 animate-in slide-in-from-right duration-500 delay-300">
            <span
              className={`px-4 py-2 rounded-full text-xs font-bold shadow-md transition-all duration-300 hover:scale-110 ${getTierColor(
                userTier
              )}`}
            >
              {userTier.toUpperCase()}
            </span>
            {/* <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2"
              >
                Change Tier ▼
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-2xl z-10 min-w-[120px]">
                  {["free", "silver", "gold", "platinum"].map((tier) => (
                    <button
                      key={tier}
                      onClick={() => {
                        updateTier(tier);
                        setDropdownOpen(false);
                      }}
                      className="block w-full px-4 py-3 text-left hover:bg-gray-50 capitalize font-medium transition-colors"
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              )}
            </div> */}
            <UserButton />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events
            .filter((e) => canAccessEvent(userTier, e.tier))
            .map((event, index) => {
              const hasAccess = canAccessEvent(userTier, event.tier);

              return (
                <div
                  key={event.id}
                  className={`bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border border-gray-100 animate-in slide-in-from-bottom duration-600 group cursor-pointer ${
                    !hasAccess ? "opacity-60 hover:opacity-80" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      key={event.title}
                      src={`https://picsum.photos/400/250?random=${event.id}`}
                      alt={event.title}
                      className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg transition-all duration-300 group-hover:scale-110 ${getTierColor(
                          event.tier
                        )}`}
                      >
                        {event.tier.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                      {event.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 font-medium transition-colors duration-300 group-hover:text-gray-600">
                        📅 {new Date(event.event_date).toLocaleDateString()}
                      </p>
                      {!hasAccess && (
                        <p className="text-red-500 text-xs font-bold bg-red-50 px-2 py-1 rounded transition-all duration-300 group-hover:bg-red-100 group-hover:scale-105">
                          Upgrade Required
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}
