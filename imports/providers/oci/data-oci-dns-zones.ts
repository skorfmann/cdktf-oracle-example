// https://www.terraform.io/docs/providers/oci/r/data_oci_dns_zones.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "name_contains": {
        "type": "string",
        "optional": true
      },
      "sort_by": {
        "type": "string",
        "optional": true
      },
      "sort_order": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "time_created_greater_than_or_equal_to": {
        "type": "string",
        "optional": true
      },
      "time_created_less_than": {
        "type": "string",
        "optional": true
      },
      "zone_type": {
        "type": "string",
        "optional": true
      },
      "zones": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "defined_tags": [
                "map",
                "string"
              ],
              "external_masters": [
                "list",
                [
                  "object",
                  {
                    "address": "string",
                    "port": "number",
                    "tsig": [
                      "list",
                      [
                        "object",
                        {
                          "algorithm": "string",
                          "name": "string",
                          "secret": "string"
                        }
                      ]
                    ],
                    "tsig_key_id": "string"
                  }
                ]
              ],
              "freeform_tags": [
                "map",
                "string"
              ],
              "id": "string",
              "name": "string",
              "nameservers": [
                "list",
                [
                  "object",
                  {
                    "hostname": "string"
                  }
                ]
              ],
              "self": "string",
              "serial": "number",
              "state": "string",
              "time_created": "string",
              "version": "string",
              "zone_type": "string"
            }
          ]
        ],
        "computed": true
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

export interface DataOciDnsZonesConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly name?: string;
  readonly nameContains?: string;
  readonly sortBy?: string;
  readonly sortOrder?: string;
  readonly state?: string;
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  readonly timeCreatedLessThan?: string;
  readonly zoneType?: string;
  /** filter block */
  readonly filter?: DataOciDnsZonesFilter[];
}
export class DataOciDnsZonesZonesExternalMastersTsig extends ComplexComputedList {

  // algorithm - computed: true, optional: false, required: true
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export class DataOciDnsZonesZonesExternalMasters extends ComplexComputedList {

  // address - computed: true, optional: false, required: true
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: true
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tsig - computed: true, optional: false, required: true
  public get tsig() {
    return 'not implemented' as any;
  }

  // tsig_key_id - computed: true, optional: false, required: true
  public get tsigKeyId() {
    return this.getStringAttribute('tsig_key_id');
  }
}
export class DataOciDnsZonesZonesNameservers extends ComplexComputedList {

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
}
export class DataOciDnsZonesZones extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: true
  public get definedTags() {
    return 'not implemented' as any;
  }

  // external_masters - computed: true, optional: false, required: true
  public get externalMasters() {
    return 'not implemented' as any;
  }

  // freeform_tags - computed: true, optional: false, required: true
  public get freeformTags() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // nameservers - computed: true, optional: false, required: true
  public get nameservers() {
    return 'not implemented' as any;
  }

  // self - computed: true, optional: false, required: true
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // serial - computed: true, optional: false, required: true
  public get serial() {
    return this.getNumberAttribute('serial');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: true
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // zone_type - computed: true, optional: false, required: true
  public get zoneType() {
    return this.getStringAttribute('zone_type');
  }
}
export interface DataOciDnsZonesFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDnsZones extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDnsZonesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_zones',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._name = config.name;
    this._nameContains = config.nameContains;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._state = config.state;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
    this._zoneType = config.zoneType;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId: string;
  public get compartmentId() {
    return this._compartmentId;
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
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

  // name_contains - computed: false, optional: true, required: false
  private _nameContains?: string;
  public get nameContains() {
    return this._nameContains;
  }
  public set nameContains(value: string | undefined) {
    this._nameContains = value;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string;
  public get sortBy() {
    return this._sortBy;
  }
  public set sortBy(value: string | undefined) {
    this._sortBy = value;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string;
  public get sortOrder() {
    return this._sortOrder;
  }
  public set sortOrder(value: string | undefined) {
    this._sortOrder = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // time_created_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeCreatedGreaterThanOrEqualTo?: string;
  public get timeCreatedGreaterThanOrEqualTo() {
    return this._timeCreatedGreaterThanOrEqualTo;
  }
  public set timeCreatedGreaterThanOrEqualTo(value: string | undefined) {
    this._timeCreatedGreaterThanOrEqualTo = value;
  }

  // time_created_less_than - computed: false, optional: true, required: false
  private _timeCreatedLessThan?: string;
  public get timeCreatedLessThan() {
    return this._timeCreatedLessThan;
  }
  public set timeCreatedLessThan(value: string | undefined) {
    this._timeCreatedLessThan = value;
  }

  // zone_type - computed: false, optional: true, required: false
  private _zoneType?: string;
  public get zoneType() {
    return this._zoneType;
  }
  public set zoneType(value: string | undefined) {
    this._zoneType = value;
  }

  // zones - computed: true, optional: false, required: true
  public zones(index: string) {
    return new DataOciDnsZonesZones(this, 'zones', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDnsZonesFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDnsZonesFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      name: this._name,
      name_contains: this._nameContains,
      sort_by: this._sortBy,
      sort_order: this._sortOrder,
      state: this._state,
      time_created_greater_than_or_equal_to: this._timeCreatedGreaterThanOrEqualTo,
      time_created_less_than: this._timeCreatedLessThan,
      zone_type: this._zoneType,
      filter: this._filter,
    };
  }
}
