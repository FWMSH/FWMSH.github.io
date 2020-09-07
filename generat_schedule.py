# This program takes the provided CSV files with the STEAM Lab and Science Theater
# schedules and generates content.js, a javascript file with two dictionaries
# for use with the web app

import pandas as pd
import sys

def load_file(csv):

    data = pd.read_csv(csv, names=["Date", "Time", "Name"], skiprows=2)
    return(data)

def parse_table(data):

    # Function to parse a pandas data table and return a list of dictionaries o
    # with fields [name, desc, date, startTime, endTime]

    events = list()
    for i in range(len(data)): # Iterate the rows of the table, building one dict for each
        dict = {}
        row = data.iloc[i]
        dict["name"] = row["Name"].strip()
        dict["desc"] = ""
        dict["date"] = row["Date"].strip()

        split = row["Time"].split("-")
        if len(split) == 1: # Wrong dash
            split = row["Time"].split("—")

        if "AM" in split[0]:
            dict["startTime"] = split[0].strip()
        elif "PM" in split[0]:
            dict["startTime"] = split[0].strip()
        else: # This means we have something like "11 - 11:30 AM"
            if "AM" in split[1]:
                dict["startTime"] = split[0].strip() + " AM"
            else:
                dict["startTime"] = split[0].strip() + " PM"

        dict["endTime"] = split[1].strip()

        events.append(dict)

    return(events)

def build_js(steam, theater):

    # Function to take a list of dictionaries and turn them into the necessary javascript table


    output = "var steamLabActivityList_en = [\n"

    for event in steam:
        output += str(event) + ',\n'
    output += "];\n\n"

    output += "var scienceTheaterActivityList_en = [\n"

    for event in theater:
        output += str(event) + ',\n'
    output += "];"

    with open("content.js", "w") as f:
        f.write(output)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Error: You must pass both the STEAM Lab and Science Theater schedules")
    else: # Parse the filenames, trying to find which schedule is which
        if "STEAM Lab" in sys.argv[1]:
            steam_csv = sys.argv[1]
            theater_csv = sys.argv[2]
        elif "STEAM Lab" in sys.argv[2]:
            steam_csv = sys.argv[2]
            theater_csv = sys.argv[1]
        else:
            steam_csv = sys.argv[1]
            theater_csv = sys.argv[2]

        steam = load_file(steam_csv)
        theater = load_file(theater_csv)

        steam_events = parse_table(steam)
        theater_events = parse_table(theater)

        build_js(steam_events, theater_events)





pass
