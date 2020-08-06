// https://www.terraform.io/docs/providers/oci/r/dns_zone.html
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
      "defined_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "freeform_tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "nameservers": {
        "type": [
          "list",
          [
            "object",
            {
              "hostname": "string"
            }
          ]
        ],
        "computed": true
      },
      "self": {
        "type": "string",
        "computed": true
      },
      "serial": {
        "type": "number",
        "computed": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "time_created": {
        "type": "string",
        "computed": true
      },
      "version": {
        "type": "string",
        "computed": true
      },
      "zone_type": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "external_masters": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "address": {
              "type": "string",
              "required": true
            },
            "port": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "tsig_key_id": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "tsig": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "algorithm": {
                    "type": "string",
                    "required": true
                  },
                  "name": {
                    "type": "string",
                    "required": true
                  },
                  "secret": {
                    "type": "string",
                    "required": true,
                    "sensitive": true
                  }
                }
              },
              "max_items": 1
            }
          }
        }
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DnsZoneConfig extends TerraformMetaArguments {
  readonly compartmentId: string;
  readonly definedTags?: { [key: string]: string };
  readonly freeformTags?: { [key: string]: string };
  readonly name: string;
  readonly zoneType: string;
  /** external_masters block */
  readonly externalMasters?: DnsZoneExternalMasters[];
  /** timeouts block */
  readonly timeouts?: DnsZoneTimeouts;
}
export class DnsZoneNameservers extends ComplexComputedList {

  // hostname - computed: true, optional: false, required: true
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
}
export interface DnsZoneExternalMastersTsig {
  readonly algorithm: string;
  readonly name: string;
  readonly secret: string;
}
export interface DnsZoneExternalMasters {
  readonly address: string;
  readonly port?: number;
  readonly tsigKeyId?: string;
  /** tsig block */
  readonly tsig?: DnsZoneExternalMastersTsig[];
}
export interface DnsZoneTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DnsZone extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_zone',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._name = config.name;
    this._zoneType = config.zoneType;
    this._externalMasters = config.externalMasters;
    this._timeouts = config.timeouts;
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

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }
  public get definedTags(): { [key: string]: string } | undefined {
    return this._definedTags; // Getting the computed value is not yet implemented
  }
  public set definedTags(value: { [key: string]: string } | undefined) {
    this._definedTags = value;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }
  public get freeformTags(): { [key: string]: string } | undefined {
    return this._freeformTags; // Getting the computed value is not yet implemented
  }
  public set freeformTags(value: { [key: string]: string } | undefined) {
    this._freeformTags = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // nameservers - computed: true, optional: false, required: true
  public nameservers(index: string) {
    return new DnsZoneNameservers(this, 'nameservers', index);
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

  // zone_type - computed: false, optional: false, required: true
  private _zoneType: string;
  public get zoneType() {
    return this._zoneType;
  }
  public set zoneType(value: string) {
    this._zoneType = value;
  }

  // external_masters - computed: false, optional: true, required: false
  private _externalMasters?: DnsZoneExternalMasters[];
  public get externalMasters() {
    return this._externalMasters;
  }
  public set externalMasters(value: DnsZoneExternalMasters[] | undefined) {
    this._externalMasters = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsZoneTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DnsZoneTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      defined_tags: this._definedTags,
      freeform_tags: this._freeformTags,
      name: this._name,
      zone_type: this._zoneType,
      external_masters: this._externalMasters,
      timeouts: this._timeouts,
    };
  }
}
