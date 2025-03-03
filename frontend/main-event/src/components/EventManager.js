"use client";

import React, { useState } from "react";
import EventCard from "./EventCard";
import EventModal from "./EventModal";

const EventManager = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Summer Festival",
      date: "2024-06-15",
      time: "14:00",
      location: "Central Park",
      details: "Annual summer celebration",
    },
    {
      id: 2,
      name: "Tech Conference",
      date: "2024-07-20",
      time: "09:00",
      location: "Innovation Center",
      details: "Latest technology trends",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({
    id: null,
    name: "",
    date: "",
    time: "",
    location: "",
    details: "",
  });

  const createEvent = () => {
    if (editMode) {
      setEvents(
        events.map((e) => (e.id === currentEvent.id ? currentEvent : e)),
      );
    } else {
      setEvents([...events, { ...currentEvent, id: events.length + 1 }]);
    }
    closeModal();
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const editEvent = (event) => {
    setCurrentEvent({ ...event });
    setEditMode(true);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditMode(false);
    setCurrentEvent({
      id: null,
      name: "",
      date: "",
      time: "",
      location: "",
      details: "",
    });
  };

  const openNewEventModal = () => {
    setEditMode(false);
    setShowModal(true);
  };

  return (
    <main className="w-screen bg-[gradient-to-b] min-h-[screen]">
      <div className="p-6 mx-auto max-w-[1200px]">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-700">Event Manager</h1>
          <button
            className="px-6 py-3 font-semibold text-white bg-green-500 rounded-lg transition-all duration-200 ease-in-out hover:scale-[0.98]"
            onClick={openNewEventModal}
          >
            Add New Event
          </button>
        </header>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:grid-cols-1">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={editEvent}
              onDelete={deleteEvent}
            />
          ))}
        </section>
      </div>
      <EventModal
        showModal={showModal}
        editMode={editMode}
        currentEvent={currentEvent}
        onClose={closeModal}
        onSubmit={(e) => {
          e.preventDefault();
          createEvent();
        }}
        onChange={setCurrentEvent}
      />
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </div>
    </main>
  );
};

export default EventManager;
