export interface DBArtObjInterface {
  links: {
    self: string;
    web: string;
  };
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage: {
    guid: string;
    offsetPercentageX: number;
    offsetPercentageY: number;
    width: number;
    height: number;
    url: string;
  };
  headerImage: {
    guid: string;
    offsetPercentageX: number;
    offsetPercentageY: number;
    width: number;
    height: number;
    url: string;
  };
  productionPlaces: string[];
  description: string;
}

export interface artObjDetailsInt {
  links: {
    search: string;
  };
  id: string;
  priref: string;
  objectNumber: string;
  language: string;
  title: string;
  copyrightHolder: null;
  webImage: {
    guid: string;
    offsetPercentageX: number;
    offsetPercentageY: number;
    width: number;
    height: number;
    url: string;
  };
  colors: {
    percentage: number;
    hex: string;
  }[];
  colorsWithNormalization: {
    originalHex: string;
    normalizedHex: string;
  }[];
  normalizedColors: {
    percentage: number;
    hex: string;
  }[];
  normalized32Colors: {
    percentage: number;
    hex: string;
  }[];
  titles: string[];
  description: string;
  labelText: null;
  objectTypes: string[];
  objectCollection: string[];
  makers: string[];
  principalMakers: {
    name: string;
    unFixedName: string;
    placeOfBirth: string;
    dateOfBirth: string;
    dateOfBirthPrecision: null;
    dateOfDeath: string;
    dateOfDeathPrecision: null;
    placeOfDeath: string;
    occupation: string[];
    roles: string[];
    nationality: string;
    biography: null;
    productionPlaces: string[];
    qualification: null;
  }[];
  plaqueDescriptionDutch: string;
  plaqueDescriptionEnglish: string;
  principalMaker: string;
  artistRole: null;
  associations: [];
  acquisition: {
    method: string;
    date: string;
    creditLine: string;
  };
  exhibitions: string[];
  materials: string[];
  techniques: string[];
  productionPlaces: string[];
  dating: {
    presentingDate: string;
    sortingDate: number;
    period: number;
    yearEarly: number;
    yearLate: number;
  };
  classification: {
    iconClassIdentifier: string[];
  };
  hasImage: boolean;
  historicalPersons: string[];
  inscriptions: string[];
  documentation: string[];
  catRefRPK: string[];
  principalOrFirstMaker: string;
  dimensions: {
    unit: string;
    type: string;
    part: null;
    value: string;
  }[];
  physicalProperties: string[];
  physicalMedium: string;
  longTitle: string;
  subTitle: string;
  scLabelLine: string;
  label: {
    title: string;
    makerLine: string;
    description: string;
    notes: string;
    date: string;
  };
  showImage: true;
  location: string;
}