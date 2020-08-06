// https://www.terraform.io/docs/providers/oci/r/data_oci_dns_rrset.html
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
        "computed": true
      },
      "items": {
        "type": [
          "list",
          [
            "object",
            {
              "domain": "string",
              "is_protected": "bool",
              "rdata": "string",
              "record_hash": "string",
              "rrset_version": "string",
              "rtype": "string",
              "ttl": "number"
            }
          ]
        ],
        "computed": true
      },
      "rtype": {
        "type": "string",
        "required": true
      },
      "zone_name_or_id": {
        "type": "string",
        "required": true
      },
      "zone_version": {
        "type": "string",
        "optional": true
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

export interface DataOciDnsRrsetConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly domain: string;
  readonly rtype: string;
  readonly zoneNameOrId: string;
  readonly zoneVersion?: string;
}
export class DataOciDnsRrsetItems extends ComplexComputedList {

  // domain - computed: true, optional: false, required: true
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // is_protected - computed: true, optional: false, required: true
  public get isProtected() {
    return this.getBooleanAttribute('is_protected');
  }

  // rdata - computed: true, optional: false, required: true
  public get rdata() {
    return this.getStringAttribute('rdata');
  }

  // record_hash - computed: true, optional: false, required: true
  public get recordHash() {
    return this.getStringAttribute('record_hash');
  }

  // rrset_version - computed: true, optional: false, required: true
  public get rrsetVersion() {
    return this.getStringAttribute('rrset_version');
  }

  // rtype - computed: true, optional: false, required: true
  public get rtype() {
    return this.getStringAttribute('rtype');
  }

  // ttl - computed: true, optional: false, required: true
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
}

// Resource

export class DataOciDnsRrset extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDnsRrsetConfig) {
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
    this._zoneVersion = config.zoneVersion;
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

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: true, optional: false, required: true
  public items(index: string) {
    return new DataOciDnsRrsetItems(this, 'items', index);
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

  // zone_version - computed: false, optional: true, required: false
  private _zoneVersion?: string;
  public get zoneVersion() {
    return this._zoneVersion;
  }
  public set zoneVersion(value: string | undefined) {
    this._zoneVersion = value;
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
      zone_version: this._zoneVersion,
    };
  }
}
