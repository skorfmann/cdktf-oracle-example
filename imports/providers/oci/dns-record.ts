// https://www.terraform.io/docs/providers/oci/r/dns_record.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compartment_id": {
        "type": "string",
        "optional": true
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
      "is_protected": {
        "type": "bool",
        "computed": true
      },
      "rdata": {
        "type": "string",
        "optional": true
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
        "optional": true
      },
      "zone_name_or_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
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

export interface DnsRecordConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly domain: string;
  readonly rdata?: string;
  readonly rtype: string;
  readonly ttl?: number;
  readonly zoneNameOrId: string;
  /** timeouts block */
  readonly timeouts?: DnsRecordTimeouts;
}
export interface DnsRecordTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DnsRecord extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DnsRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_record',
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
    this._rdata = config.rdata;
    this._rtype = config.rtype;
    this._ttl = config.ttl;
    this._zoneNameOrId = config.zoneNameOrId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string;
  public get compartmentId() {
    return this._compartmentId;
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

  // is_protected - computed: true, optional: false, required: true
  public get isProtected() {
    return this.getBooleanAttribute('is_protected');
  }

  // rdata - computed: false, optional: true, required: false
  private _rdata?: string;
  public get rdata() {
    return this._rdata;
  }
  public set rdata(value: string | undefined) {
    this._rdata = value;
  }

  // record_hash - computed: true, optional: false, required: true
  public get recordHash() {
    return this.getStringAttribute('record_hash');
  }

  // rrset_version - computed: true, optional: false, required: true
  public get rrsetVersion() {
    return this.getStringAttribute('rrset_version');
  }

  // rtype - computed: false, optional: false, required: true
  private _rtype: string;
  public get rtype() {
    return this._rtype;
  }
  public set rtype(value: string) {
    this._rtype = value;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number;
  public get ttl() {
    return this._ttl;
  }
  public set ttl(value: number | undefined) {
    this._ttl = value;
  }

  // zone_name_or_id - computed: false, optional: false, required: true
  private _zoneNameOrId: string;
  public get zoneNameOrId() {
    return this._zoneNameOrId;
  }
  public set zoneNameOrId(value: string) {
    this._zoneNameOrId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DnsRecordTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DnsRecordTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      domain: this._domain,
      rdata: this._rdata,
      rtype: this._rtype,
      ttl: this._ttl,
      zone_name_or_id: this._zoneNameOrId,
      timeouts: this._timeouts,
    };
  }
}
