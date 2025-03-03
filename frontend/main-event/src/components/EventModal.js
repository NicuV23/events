"use client";

import React from "react";

const EventModal = ({
  showModal,
  editMode,
  currentEvent,
  onClose,
  onSubmit,
  onChange,
}) => {
  return (
    <div
    className={`fixed inset-0 flex justify-center items-center p-6 bg-black bg-opacity-50 transition-opacity duration-300 ${
      showModal ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
  
      <div className="p-8 w-full bg-white rounded-xl max-w-[500px]">
        <h2 id="modal-title" className="mb-6 text-2xl font-semibold">
          {editMode ? "Edit Event" : "Create New Event"}
        </h2>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Event Name"
            required
            className="p-3 rounded border border-solid border-zinc-300"
            value={currentEvent.name}
            onChange={(e) =>
              onChange({ ...currentEvent, name: e.target.value })
            }
            aria-label="Event Name"
          />
          <input
            type="date"
            required
            className="p-3 rounded border border-solid border-zinc-300"
            value={currentEvent.date}
            onChange={(e) =>
              onChange({ ...currentEvent, date: e.target.value })
            }
            aria-label="Event Date"
          />
          <input
            type="time"
            required
            className="p-3 rounded border border-solid border-zinc-300"
            value={currentEvent.time}
            onChange={(e) =>
              onChange({ ...currentEvent, time: e.target.value })
            }
            aria-label="Event Time"
          />
          <input
            type="text"
            placeholder="Location"
            required
            className="p-3 rounded border border-solid border-zinc-300"
            value={currentEvent.location}
            onChange={(e) =>
              onChange({ ...currentEvent, location: e.target.value })
            }
            aria-label="Event Location"
          />
          <textarea
            placeholder="Event Details"
            required
            className="p-3 rounded border border-solid border-zinc-300 h-[100px]"
            value={currentEvent.details}
            onChange={(e) =>
              onChange({ ...currentEvent, details: e.target.value })
            }
            aria-label="Event Details"
          />
          <div className="flex gap-4 justify-end mt-4">
            <button
              type="button"
              className="px-6 py-3 rounded border border-solid border-zinc-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 text-white bg-green-500 rounded"
            >
              {editMode ? "Save Changes" : "Create Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventModal;
