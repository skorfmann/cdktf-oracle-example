// https://www.terraform.io/docs/providers/oci/r/data_oci_health_checks_vantage_points.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "display_name": {
        "type": "string",
        "optional": true
      },
      "health_checks_vantage_points": {
        "type": [
          "list",
          [
            "object",
            {
              "display_name": "string",
              "geo": [
                "list",
                [
                  "object",
                  {
                    "admin_div_code": "string",
                    "city_name": "string",
                    "country_code": "string",
                    "country_name": "string",
                    "geo_key": "string",
                    "latitude": "number",
                    "longitude": "number"
                  }
                ]
              ],
              "name": "string",
              "provider_name": "string",
              "routing": [
                "list",
                [
                  "object",
                  {
                    "as_label": "string",
                    "asn": "number",
                    "prefix": "string",
                    "weight": "number"
                  }
                ]
              ]
            }
          ]
        ],
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "regex": {
              "type": "bool",
              "optional": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataOciHealthChecksVantagePointsConfig extends TerraformMetaArguments {
  readonly displayName?: string;
  readonly name?: string;
  /** filter block */
  readonly filter?: DataOciHealthChecksVantagePointsFilter[];
}
export class DataOciHealthChecksVantagePointsHealthChecksVantagePointsGeo extends ComplexComputedList {

  // admin_div_code - computed: true, optional: false, required: true
  public get adminDivCode() {
    return this.getStringAttribute('admin_div_code');
  }

  // city_name - computed: true, optional: false, required: true
  public get cityName() {
    return this.getStringAttribute('city_name');
  }

  // country_code - computed: true, optional: false, required: true
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // country_name - computed: true, optional: false, required: true
  public get countryName() {
    return this.getStringAttribute('country_name');
  }

  // geo_key - computed: true, optional: false, required: true
  public get geoKey() {
    return this.getStringAttribute('geo_key');
  }

  // latitude - computed: true, optional: false, required: true
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: true
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
}
export class DataOciHealthChecksVantagePointsHealthChecksVantagePointsRouting extends ComplexComputedList {

  // as_label - computed: true, optional: false, required: true
  public get asLabel() {
    return this.getStringAttribute('as_label');
  }

  // asn - computed: true, optional: false, required: true
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // prefix - computed: true, optional: false, required: true
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // weight - computed: true, optional: false, required: true
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataOciHealthChecksVantagePointsHealthChecksVantagePoints extends ComplexComputedList {

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // geo - computed: true, optional: false, required: true
  public get geo() {
    return 'not implemented' as any;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_name - computed: true, optional: false, required: true
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // routing - computed: true, optional: false, required: true
  public get routing() {
    return 'not implemented' as any;
  }
}
export interface DataOciHealthChecksVantagePointsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciHealthChecksVantagePoints extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciHealthChecksVantagePointsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_health_checks_vantage_points',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._name = config.name;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // health_checks_vantage_points - computed: true, optional: false, required: true
  public healthChecksVantagePoints(index: string) {
    return new DataOciHealthChecksVantagePointsHealthChecksVantagePoints(this, 'health_checks_vantage_points', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciHealthChecksVantagePointsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciHealthChecksVantagePointsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      name: this._name,
      filter: this._filter,
    };
  }
}
