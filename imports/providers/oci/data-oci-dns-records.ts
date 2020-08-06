// https://www.terraform.io/docs/providers/oci/r/data_oci_dns_records.html
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
        "optional": true
      },
      "domain_contains": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "records": {
        "type": [
          "list",
          [
            "object",
            {
              "compartment_id": "string",
              "domain": "string",
              "is_protected": "bool",
              "rdata": "string",
              "record_hash": "string",
              "rrset_version": "string",
              "rtype": "string",
              "ttl": "number",
              "zone_name_or_id": "string"
            }
          ]
        ],
        "computed": true
      },
      "rtype": {
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
      "zone_name_or_id": {
        "type": "string",
        "required": true
      },
      "zone_version": {
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

export interface DataOciDnsRecordsConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly domain?: string;
  readonly domainContains?: string;
  readonly rtype?: string;
  readonly sortBy?: string;
  readonly sortOrder?: string;
  readonly zoneNameOrId: string;
  readonly zoneVersion?: string;
  /** filter block */
  readonly filter?: DataOciDnsRecordsFilter[];
}
export class DataOciDnsRecordsRecords extends ComplexComputedList {

  // compartment_id - computed: true, optional: false, required: true
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

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

  // zone_name_or_id - computed: true, optional: false, required: true
  public get zoneNameOrId() {
    return this.getStringAttribute('zone_name_or_id');
  }
}
export interface DataOciDnsRecordsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciDnsRecords extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciDnsRecordsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_records',
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
    this._domainContains = config.domainContains;
    this._rtype = config.rtype;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._zoneNameOrId = config.zoneNameOrId;
    this._zoneVersion = config.zoneVersion;
    this._filter = config.filter;
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

  // domain - computed: false, optional: true, required: false
  private _domain?: string;
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }

  // domain_contains - computed: false, optional: true, required: false
  private _domainContains?: string;
  public get domainContains() {
    return this._domainContains;
  }
  public set domainContains(value: string | undefined) {
    this._domainContains = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // records - computed: true, optional: false, required: true
  public records(index: string) {
    return new DataOciDnsRecordsRecords(this, 'records', index);
  }

  // rtype - computed: false, optional: true, required: false
  private _rtype?: string;
  public get rtype() {
    return this._rtype;
  }
  public set rtype(value: string | undefined) {
    this._rtype = value;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciDnsRecordsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciDnsRecordsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      domain: this._domain,
      domain_contains: this._domainContains,
      rtype: this._rtype,
      sort_by: this._sortBy,
      sort_order: this._sortOrder,
      zone_name_or_id: this._zoneNameOrId,
      zone_version: this._zoneVersion,
      filter: this._filter,
    };
  }
}
