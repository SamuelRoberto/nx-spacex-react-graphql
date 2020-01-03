import { gql } from 'apollo-server';
import axios from 'axios';

export const typeDefs = gql`
  type Rocket {
    id: String!
    active: Boolean!
    stages: Float!
    boosters: Float!
    cost_per_launch: Float!
    success_rate_pct: Float!
    first_flight: String!
    country: String!
    company: String!
    height: Height!
    diameter: Diameter!
    mass: Mass!
    payload_weights: [PayloadWeight]!
    first_stage: FirstStage!
    second_stage: SecondStage!
    engines: Engines!
    landing_legs: LandingLegs!
    wikipedia: String!
    description: String!
    rocket_id: String!
    rocket_name: String!
    rocket_type: String!
  }

  type Height {
    meters: Float!
    feet: Float!
  }

  type Mass {
    kg: Float!
    lb: Float!
  }

  type PayloadWeight {
    id: String!
    name: String!
    kg: Float!
    lb: Float!
  }

  type FirstStage {
    reusable: Boolean!
    engines: Float!
    fuel_amount_tons: Float!
    burn_time_sec: Float!
    thrust_sea_level: ThrustSeaLevel!
    thrust_vacuum: ThrustVacuum!
    cores: Float
  }

  type ThrustSeaLevel {
    kN: Float!
    lbf: Float!
  }

  type ThrustVacuum {
    kN: Float!
    lbf: Float!
  }

  type SecondStage {
    engines: Float!
    fuel_amount_tons: Float!
    burn_time_sec: Float!
    thrust: Thrust!
    payloads: Payloads!
  }

  type Payloads {
    option_1: String!
    composite_fairing: CompositeFairing!
    option_2: String!
  }

  type CompositeFairing {
    height: Height2!
    diameter: Diameter2!
  }

  type Height2 {
    meters: Float
    feet: Float
  }

  type Diameter2 {
    meters: Float
    feet: Float
  }

  type Engines {
    number: Float!
    type: String!
    version: String!
    layout: String!
    engine_loss_max: Float
    propellant_1: String!
    propellant_2: String!
    thrust_sea_level: ThrustSeaLevel2!
    thrust_vacuum: ThrustVacuum2!
    thrust_to_weight: Float
  }

  type ThrustSeaLevel2 {
    kN: Float!
    lbf: Float!
  }

  type ThrustVacuum2 {
    kN: Float!
    lbf: Float!
  }

  type LandingLegs {
    number: Float!
    material: String!
  }
`;

export const resolvers = {
  Query: {
    rockets: () => {
      return axios.get('https://api.spacexdata.com/v3/rockets')
        .then(res => res.data);
    },
    rocket: (parentValue, args) => {
      return axios.get('https://api.spacexdata.com/v3/rockets/' + args.rocket_id)
        .then(res => res.data);
    }
  }
};
