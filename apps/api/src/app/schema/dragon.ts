
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
`;

export const resolvers = {
  Query: {
    dragons: () => {
      return axios.get('https://api.spacexdata.com/v3/dragons')
        .then(res => res.data);
    },
    dragon: (parentValue, args) => {
      return axios.get('https://api.spacexdata.com/v3/dragons/' + args.id)
        .then(res => res.data);
    },
  }
};
