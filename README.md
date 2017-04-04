# React, Redux, Redux-ORM and Reselect

A simple example of how react, redux, redux-orm and reselect can be used together to deliver a performant and scalable application architecture.

## Background

Designed to mimic a real world example of a book store application, this project focuses on how the techonologies above can be used together.

## How it relates to Conference Grid

### Branches

Two branches reflect how the technologies will be used for two different parts of conference grid:
  - **`show-all-publishers`** shows how we will 
      - list out the sessions for each location using a dynamically created list of containers, whose properties are passed into a custom selector to retreive all sessions at that location
      - highlight sessions that match the currently selected stream using styles and the `selectedStreamId` stored in the state
  - **`show-selected-publishers`** shows how we will
      -  filter sessions belonging to the selected day using the `selectedDayId` stored in the state
      
### Objects
  - `Publisher` &rarr; `Location`
  - `Book` &rarr; `Session`
  - `Author` &rarr; `Speaker`
