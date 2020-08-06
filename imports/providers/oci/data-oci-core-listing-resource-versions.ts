// https://www.terraform.io/docs/providers/oci/r/data_oci_core_listing_resource_versions.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "app_catalog_listing_resource_versions": {
        "type": [
          "list",
          [
            "object",
            {
              "accessible_ports": [
                "list",
                "number"
              ],
              "allowed_actions": [
                "list",
                "string"
              ],
              "available_regions": [
                "list",
                "string"
              ],
              "compatible_shapes": [
                "list",
                "string"
              ],
              "listing_id": "string",
              "listing_resource_id": "string",
              "listing_resource_version": "string",
              "time_published": "string"
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
      "listing_id": {
        "type": "string",
        "required": true
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

export interface DataOciCoreListingResourceVersionsConfig extends TerraformMetaArguments {
  readonly listingId: string;
  /** filter block */
  readonly filter?: DataOciCoreListingResourceVersionsFilter[];
}
export class DataOciCoreListingResourceVersionsAppCatalogListingResourceVersions extends ComplexComputedList {

  // accessible_ports - computed: true, optional: false, required: true
  public get accessiblePorts() {
    return 'not implemented' as any;
  }

  // allowed_actions - computed: true, optional: false, required: true
  public get allowedActions() {
    return this.getListAttribute('allowed_actions');
  }

  // available_regions - computed: true, optional: false, required: true
  public get availableRegions() {
    return this.getListAttribute('available_regions');
  }

  // compatible_shapes - computed: true, optional: false, required: true
  public get compatibleShapes() {
    return this.getListAttribute('compatible_shapes');
  }

  // listing_id - computed: true, optional: false, required: true
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // listing_resource_id - computed: true, optional: false, required: true
  public get listingResourceId() {
    return this.getStringAttribute('listing_resource_id');
  }

  // listing_resource_version - computed: true, optional: false, required: true
  public get listingResourceVersion() {
    return this.getStringAttribute('listing_resource_version');
  }

  // time_published - computed: true, optional: false, required: true
  public get timePublished() {
    return this.getStringAttribute('time_published');
  }
}
export interface DataOciCoreListingResourceVersionsFilter {
  readonly name: string;
  readonly regex?: boolean;
  readonly values: string[];
}

// Resource

export class DataOciCoreListingResourceVersions extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreListingResourceVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_listing_resource_versions',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._listingId = config.listingId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_catalog_listing_resource_versions - computed: true, optional: false, required: true
  public appCatalogListingResourceVersions(index: string) {
    return new DataOciCoreListingResourceVersionsAppCatalogListingResourceVersions(this, 'app_catalog_listing_resource_versions', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // listing_id - computed: false, optional: false, required: true
  private _listingId: string;
  public get listingId() {
    return this._listingId;
  }
  public set listingId(value: string) {
    this._listingId = value;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataOciCoreListingResourceVersionsFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataOciCoreListingResourceVersionsFilter[] | undefined) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      listing_id: this._listingId,
      filter: this._filter,
    };
  }
}
