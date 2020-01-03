import { gql } from 'apollo-server';
import axios from 'axios';

export const typeDefs = gql`
  type Dragon {
    id: String!
    name: String!
    type: String!
    active: Boolean!
    crew_capacity: Float!
    sidewall_angle_deg: Float!
    orbit_duration_yr: Float!
    dry_mass_kg: Float!
    dry_mass_lb: Float!
    first_flight: String!
    heat_shield: HeatShield!
    thrusters: [Thruster]!
    launch_payload_mass: LaunchPayloadMass!
    launch_payload_vol: LaunchPayloadVol!
    return_payload_mass: ReturnPayloadMass!
    return_payload_vol: ReturnPayloadVol!
    pressurized_capsule: PressurizedCapsule!
    trunk: Trunk!
    height_w_trunk: HeightWTrunk!
    diameter: Diameter!
    wikipedia: String!
    description: String!
  }

  type HeatShield {
    material: String!
    size_meters: Float!
    temp_degrees: Float!
    dev_partner: String!
  }

  type Thrust {
    kN: Float!
    lbf: Float!
  }

  type Thruster {
    type: String!
    amount: Float!
    pods: Float!
    fuel_1: String!
    fuel_2: String!
    thrust: Thrust!
  }

  type LaunchPayloadMass {
    kg: Float!
    lb: Float!
  }

  type LaunchPayloadVol {
    cubic_meters: Float!
    cubic_feet: Float!
  }

  type ReturnPayloadMass {
    kg: Float!
    lb: Float!
  }

  type ReturnPayloadVol {
    cubic_meters: Float!
    cubic_feet: Float!
  }

  type PayloadVolume {
    cubic_meters: Float!
    cubic_feet: Float!
  }

  type PressurizedCapsule {
    payload_volume: PayloadVolume!
  }

  type TrunkVolume {
    cubic_meters: Float!
    cubic_feet: Float!
  }

  type Cargo {
    solar_array: Float!
    unpressurized_cargo: Boolean!
  }

  type Trunk {
    trunk_volume: TrunkVolume!
    cargo: Cargo!
  }

  type HeightWTrunk {
    meters: Float!
    feet: Float!
  }

  type Diameter {
    meters: Float!
    feet: Float!
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

  type Query {
    dragons: [Dragon]
    dragon(id: String!): Dragon
    rockets: [Rocket]
    rocket(rocket_id: String!): Rocket
  }
`;

export const resolvers = {
  Query: {
    dragons: () => {
      return axios.get('https://api.spacexdata.com/v3/dragons')
        .then(res => res.data);
    },
    rockets: () => {
      return axios.get('https://api.spacexdata.com/v3/rockets')
        .then(res => res.data);
    },
    dragon: (parentValue, args) => {
      return axios.get('https://api.spacexdata.com/v3/dragons/' + args.id)
        .then(res => res.data);
    },
    rocket: (parentValue, args) => {
      return axios.get('https://api.spacexdata.com/v3/rockets/' + args.rocket_id)
        .then(res => res.data);
    }
  },
};

// name
// type
// active
// crew_capacity
// sidewall_angle_deg
// orbit_duration_yr
// dry_mass_kg
// dry_mass_lb
// first_flight
// heat_shield
// thrusters
// launch_payload_mass
// launch_payload_vol
// return_payload_mass
// return_payload_vol
// pressurized_capsule
// trunk
// height_w_trunk
// diameter
// wikipedia
// description
