// https://www.terraform.io/docs/providers/oci/r/data_oci_core_app_catalog_listing_resource_version.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "accessible_ports": {
        "type": [
          "list",
          "number"
        ],
        "computed": true
      },
      "allowed_actions": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "available_regions": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "compatible_shapes": {
        "type": [
          "list",
          "string"
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
      },
      "listing_resource_id": {
        "type": "string",
        "computed": true
      },
      "listing_resource_version": {
        "type": "string",
        "computed": true
      },
      "resource_version": {
        "type": "string",
        "required": true
      },
      "time_published": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataOciCoreAppCatalogListingResourceVersionConfig extends TerraformMetaArguments {
  readonly listingId: string;
  readonly resourceVersion: string;
}

// Resource

export class DataOciCoreAppCatalogListingResourceVersion extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataOciCoreAppCatalogListingResourceVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_app_catalog_listing_resource_version',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._listingId = config.listingId;
    this._resourceVersion = config.resourceVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // listing_resource_id - computed: true, optional: false, required: true
  public get listingResourceId() {
    return this.getStringAttribute('listing_resource_id');
  }

  // listing_resource_version - computed: true, optional: false, required: true
  public get listingResourceVersion() {
    return this.getStringAttribute('listing_resource_version');
  }

  // resource_version - computed: false, optional: false, required: true
  private _resourceVersion: string;
  public get resourceVersion() {
    return this._resourceVersion;
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }

  // time_published - computed: true, optional: false, required: true
  public get timePublished() {
    return this.getStringAttribute('time_published');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      listing_id: this._listingId,
      resource_version: this._resourceVersion,
    };
  }
}
