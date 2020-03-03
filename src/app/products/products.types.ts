class UserLastLocation {
    'lat': number;
    'lon': number;
    'geohash': string;
    'fragment': boolean;
}

class MicroScoreModel {
    'score': number;
    'filePath': string;
}

class MicroScoresModel {
    'SPEEDING': MicroScoreModel;
    'DROWSY': MicroScoreModel;
    'DISTRACTION': MicroScoreModel;
    'HARD_ACCELERATION': MicroScoreModel;
    'HARD_BRAKING': MicroScoreModel;
    'HARD_TURN': MicroScoreModel;
    'LANE_CHANGE': MicroScoreModel;
}

export interface DriverModel {
    'userId': number;
    'username': string;
    'email': string;
    'gender': string;
    'dob': string;
    'companyName': string;
    'countryCode': string;
    'phoneNumber': string;
    'accountName': string;
    'totalTripCount': number;
    'averageTripScore': number;
    'userLastLocation': UserLastLocation ;
    'extraTripScores': MicroScoresModel;
}

export interface TripModel {
    'id': string;
    'userId': number;
    'userName': string;
    'tripId': number;
    'appTripId': string;
    'overallTripScore': number;
    'startTime': string;
    'startLocation': string;
    'endTime': string;
    'endLocation': string;
    'tripFilePath': string;
    'accountName': string;
    'isCoPassenger': boolean;
    'extraTripScores': MicroScoresModel;
}

export interface EventModel {
    'appEventId': string;
    'appTripId': string;
    'bearingAccuracy': number;
    'bearingAngle': number;
    'distractionScore': number;
    'drowsyScore': number;
    'eventId': number;
    'eventTimestamp': string;
    'gpsTimestamp': string;
    'hardAccelerationScore': number;
    'hardBrakingScore': number;
    'hardTurnScore': number;
    'id': string;
    'laneChangeScore': number;
    'latitude': number;
    'longitude': number;
    'speed': number;
    'speedAccuracy': number;
    'speedingScore': number;
    'tripState': string;
    'userId': number;
}

export interface InterventionModel {
    'endTime': string;
    'eventsList': Array<EventsListModel>;
    'id': string;
    'scoringType': string;
    'startTime': string;
}

export interface EventsListModel {
    'latitude': number;
    'longitude': number;
    'speed': number;
}

export interface HereLocation {
    'lat': number;
    'lon': number;
}

export class EventPolylineModel {
    path: Array<HereLocation>;
    color: string;
}
