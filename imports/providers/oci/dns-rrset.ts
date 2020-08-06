// https://www.terraform.io/docs/providers/oci/r/dns_rrset.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "domain": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "rtype": {
        "type": "string",
        "required": true
      },
      "zone_name_or_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "items": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "domain": {
              "type": "string",
              "required": true
            },
            "is_protected": {
              "type": "bool",
              "computed": true
            },
            "rdata": {
              "type": "string",
              "required": true
            },
            "record_hash": {
              "type": "string",
              "computed": true
            },
            "rrset_version": {
              "type": "string",
              "computed": true
            },
            "rtype": {
              "type": "string",
              "required": true
            },
            "ttl": {
              "type": "number",
              "required": true
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

// Configuration

export interface DnsRrsetConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly domain: string;
  readonly rtype: string;
  readonly zoneNameOrId: string;
  /** items block */
  readonly items?: DnsRrsetItems[];
  /** timeouts block */
  readonly timeouts?: DnsRrsetTimeouts;
}
export interface DnsRrsetItems {
  readonly domain: string;
  readonly rdata: string;
  readonly rtype: string;
  readonly ttl: number;
}
export interface DnsRrsetTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DnsRrset extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsRrsetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_rrset',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._domain = config.domain;
    this._rtype = config.rtype;
    this._zoneNameOrId = config.zoneNameOrId;
    this._items = config.items;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId ?? this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string | undefined) {
    this._compartmentId = value;
  }

  // domain - computed: false, optional: false, required: true
  private _domain: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string) {
    this._domain = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // rtype - computed: false, optional: false, required: true
  private _rtype: string;
  public get rtype() {
    return this._rtype;
  }
  public set rtype(value: string) {
    this._rtype = value;
  }

  // zone_name_or_id - computed: false, optional: false, required: true
  private _zoneNameOrId: string;
  public get zoneNameOrId() {
    return this._zoneNameOrId;
  }
  public set zoneNameOrId(value: string) {
    this._zoneNameOrId = value;
  }

  // items - computed: false, optional: true, required: false
  private _items?: DnsRrsetItems[];
  public get items() {
    return this._items;
  }
  public set items(value: DnsRrsetItems[] | undefined) {
    this._items = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsRrsetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DnsRrsetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      domain: this._domain,
      rtype: this._rtype,
      zone_name_or_id: this._zoneNameOrId,
      items: this._items,
      timeouts: this._timeouts,
    };
  }
}
