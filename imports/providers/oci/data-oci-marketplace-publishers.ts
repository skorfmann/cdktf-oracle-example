// https://www.terraform.io/docs/providers/oci/r/data_oci_marketplace_publishers.html
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
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "publisher_id": {
        "type": "string",
        "optional": true
      },
      "publishers": {
        "type": [
          "list",
          [
            "object",
            {
              "description": "string",
              "id": "string",
              "name": "string"
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

export interface DataOciMarketplacePublishersConfig extends TerraformMetaArguments {
  readonly compartmentId?: string;
  readonly publisherId?: string;
  /** filter block */
  readonly filter?: DataOciMarketplacePublishersFilter[];
}
export class DataOciMarketplacePublishersPublishers extends ComplexComputedList {

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataOciMarketplacePublishersFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciMarketplacePublishers extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciMarketplacePublishersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_publishers',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._compartmentId = config.compartmentId;
    this._publisherId = config.publisherId;
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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // publisher_id - computed: false, optional: true, required: false
  private _publisherId?: string;
  public get publisherId() {
    return this._publisherId;
  }
  public set publisherId(value: string | undefined) {
    this._publisherId = value;
  }

  // publishers - computed: true, optional: false, required: true
  public publishers(index: string) {
    return new DataOciMarketplacePublishersPublishers(this, 'publishers', index);
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciMarketplacePublishersFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciMarketplacePublishersFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: this._compartmentId,
      publisher_id: this._publisherId,
      filter: this._filter,
    };
  }
}
